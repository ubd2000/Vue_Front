<template>
  <div id="wrapper">
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">글쓰기</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <form ref="form" @submit.prevent="boardWrite">
            <div>
              <p>제목</p><input type="text" id="subJect" name="subJect">
            </div>
            <div>
              <p>내용</p><textarea type="text" id="contents" name="contents"></textarea>
            </div>
            <div>
              <p>파일 업로드</p><input type="file" id="files" name="files" ref="fileContainer">
            </div>
            <input type="submit" value="쓰기">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardsWrite",
  data() {
    return {}
  },

  methods: {
    boardWrite: function () {

      var vm = this, formData = new FormData(vm.$refs.form);

      console.log(formData.get('files'));

      this.axios.post(`/boards/write`, formData).then(res => {
        console.log(res.code);
        if(res.code == 0) {
          window.location.href = '/boards';
        }
      }).catch(error => {
        console.log(error.response.data.code);
        if(error.response.data.code == -5) {
          alert(error.response.data.msg);
        }
      })
    },
  }
}
</script>

<style scoped>

</style>