<template>
  <div class="my-quill-editor">
    <div class="active-pane">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="my-el-tabs">
        <el-tab-pane label="PC端" name="PC" class="pc-app-pane">
          <el-tabs v-model="activeInnName_PC" @tab-click="handleClick1">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="App端" name="App" class="pc-app-pane">
          <el-tabs v-model="activeInnName_App" @tab-click="handleClick2">
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
      </el-tabs>

      <div class="rich-text">
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange">
        </quill-editor>
      </div>

      <div class="btn-div">
        <el-button type="primary" @click="save()" class="mybutton" round>Submit</el-button>
        <el-button type="warning" @click="clear()" class="mybutton" round>Clear</el-button>
        <el-button type="primary" @click="imgGenerator" class="mybutton" round>TakePicture</el-button>
      </div>

      <div class="message-title" v-show="showMsgTitle">以下为富文本生成的图片</div>
      <div class="section-cus">
        <section class="share_popup" id="html2canvas">
        </section>
      </div>
      <div class="message-title" v-show="showMsgTitle">{{ message }}</div>
    </div>
  </div>

</template>
<script>
  import { quillEditor } from 'vue-quill-editor';
  import html2canvas from 'common/js/html2canvas.js';
  import $ from 'jquery';
  export default {
    data() {
      return {
        activeName: 'PC',
        activeInnName_PC: 'second',
        activeInnName_App: 'third',
        content: null,
        dataObj: null,
        editorOption: {

        },
        idx1: 0,
        idx2Arr: [1, 0],
        message: null,
        showMsgTitle: false
      };
    },
    methods: {
      handleClick(tab, event) {
        if (tab.name === 'PC') {
          this.idx1 = 0;
        } else {
          this.idx1 = 1;
        }
        this.setContent();
        console.log('++++++++++++++++++');
        console.log(tab);
        console.log('++++++++++++++++++');
        console.log(event);
        console.log('++++++++++++++++++');
      },
      handleClick1(tab, event) {
        if (tab.name === 'first') {
          this.idx2Arr[this.idx1] = 0;
        } else {
          this.idx2Arr[this.idx1] = 1;
        }
        this.setContent();
        console.log('++++++++++++++++++');
        console.log(tab);
        console.log('++++++++++++++++++');
        console.log(event);
        console.log('++++++++++++++++++');
      },
      handleClick2(tab, event) {
        if (tab.name === 'third') {
          this.idx2Arr[this.idx1] = 0;
        } else {
          this.idx2Arr[this.idx1] = 1;
        }
        this.setContent();
        console.log('++++++++++++++++++');
        console.log(tab);
        console.log('++++++++++++++++++');
        console.log(event);
        console.log('++++++++++++++++++');
      },
      onEditorBlur() { // 失去焦点事件
        console.log('onEditorBlur');
      },
      onEditorFocus() { // 获得焦点事件
        console.log('onEditorFocus');
      },
      onEditorChange({ editor, html, text }) { // 内容改变事件
        console.log('onEditorFocus');
        console.log('editor');
        console.log(editor);
        console.log('html');
        console.log(html);
        console.log('text');
        console.log(text);
        this.dataObj[this.idx1][this.idx2Arr[this.idx1]].data = html;
        this.setContent();
      },
      save() {
        console.log(this.dataObj);
        localStorage.setItem('dataObj', JSON.stringify(this.dataObj));
      },
      clear() {
        localStorage.setItem('dataObj', null);
        this.initData();
        this.setContent();
      },
      setContent() {
        console.log(this.dataObj[this.idx1][this.idx2Arr[this.idx1]].data);
        this.content = this.dataObj[this.idx1][this.idx2Arr[this.idx1]].data;
      },
      initData() {
        let initData = JSON.parse(localStorage.getItem('dataObj'));
        console.log(initData);
        if (initData !== null) {
          this.dataObj = initData;
        } else {
          this.dataObj = [[{'data': 'first'}, {'data': 'second'}], [{'data': 'third'}, {'data': 'fourth'}]];
        }
      },
      imgGenerator: function () {
        var str = this.dataObj[this.idx1][this.idx2Arr[this.idx1]].data;
        var copyDom = document.createElement('section');
        copyDom.setAttribute('id', 'showPic');
        copyDom.style.width = '500px';
        copyDom.style.backgroundColor = 'white';
        copyDom.style.whiteSpace = 'normal';
        copyDom.style.wordBreak = 'break-all';
        copyDom.style.wordWrap = 'break-word';
        copyDom.innerHTML = str;
        $('body').append(copyDom);

        html2canvas(copyDom, {
          scale: 2,
          logging: false,
          useCORS: true,
          allowTaint: true,
          taintTest: false,
          onrendered: (canvas) => {
            this.showMsgTitle = true;
            var imageBase64 = canvas.toDataURL('image/jpeg', 0.92);
            console.log('+++++++++++++++');
            console.log(imageBase64);
            console.log('+++++++++++++++');
            var pHtml = '<img src=' + imageBase64 + ' />';
            $('#html2canvas').html(pHtml);
            $('#showPic').remove();
            this.takePicture(imageBase64);
          }
        });
      },
      takePicture(imageBase64) {
        let url = '/run' + '/api/savePictureByBase64/';
        let picPathName = process.env.PIC_PATH + this.idx1 + this.idx2Arr[this.idx1] + '_0092.jpeg';
        // let params = {
        //   'picPathName': picPathName,
        //   'picStrBase64': imageBase64
        // };
        // let option = {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        // }
        // this.$http.post(
        //   url,
        //   params,
        //   option
        // ).then((resp) => {
        //     console.log(resp);
        //     this.message = resp;
        //   }
        // ).catch((error) => {
        //     console.log(error);
        //     this.message = error;
        //   }
        // );

        this.$http({
          url: url,
          method: 'post',
          data: {
            'picPathName': picPathName,
            'picStrBase64': imageBase64
          },
          transformRequest: [function (data) {
            // Do whatever you want to transform the data
            let ret = '';
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
          }],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then((resp) => {
            console.log(resp);
            this.message = resp.data;
          }
        ).catch((error) => {
            console.log(error);
            this.message = '1:图片通过服务端保存失败，可能是后台服务未启动。';
          }
        );
      }
    },
    created: function () {
      this.initData();
      this.setContent();
    },
    components: {
      quillEditor
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'quill/dist/quill.core.css';
  @import 'quill/dist/quill.snow.css';
  @import 'quill/dist/quill.bubble.css';

  .my-quill-editor
    .my-el-tabs
      position unset !important
    .active-pane
      width 70%
      margin auto
    .pc-app-pane
      margin auto 0
    .el-tabs__nav-wrap
      overflow hidden
      margin-bottom -1px
      position unset !important
      width 100%
    .ql-container
      height 300px
    .mybutton
      width 120px
    .btn-div
      margin-top 20px
    .section-cus
      margin auto
      width 500px
    .hidden-div
      width 500px
      white-space:normal;
      word-break:break-all;
      word-wrap:break-word;
      display none
    .message-title
      text-align left
      color red
      font-weight bold
</style>
