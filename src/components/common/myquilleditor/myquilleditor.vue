<template>
  <div class="my-quill-editor">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="PC端" name="PC">
        <el-tabs v-model="activeInnName_PC" @tab-click="handleClick1">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="App端" name="App">
        <el-tabs v-model="activeInnName_App" @tab-click="handleClick2">
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>

    <div >
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange">
      </quill-editor>
    </div>

    <button @click="save()">Submit</button>
    <button @click="clear()">Clear</button>
  </div>

</template>
<script>
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
        idx2: 1
      };
    },
    methods: {
      handleClick(tab, event) {
        if (tab.name === 'PC') {
          this.idx1 = 0;
          this.idx2 = 1;
        } else {
          this.idx1 = 1;
          this.idx2 = 0;
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
          this.idx2 = 0;
        } else {
          this.idx2 = 1;
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
          this.idx2 = 0;
        } else {
          this.idx2 = 1;
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
        this.dataObj[this.idx1][this.idx2].data = html;
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
        console.log(this.dataObj[this.idx1][this.idx2].data);
        this.content = this.dataObj[this.idx1][this.idx2].data;
      },
      initData() {
        let initData = JSON.parse(localStorage.getItem('dataObj'));
        console.log(initData);
        if (initData !== null) {
          this.dataObj = initData;
        } else {
          this.dataObj = [[{'data': 'first'}, {'data': 'second'}], [{'data': 'third'}, {'data': 'fourth'}]];
        }
      }
    },
    created: function () {
      this.initData();
      this.setContent();
    }
  };
</script>
