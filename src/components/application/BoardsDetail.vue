<template>
  <div>
    <div>
      <span>게시판 번호 : </span><input type="text" v-bind:value="boards.boardSeq" readonly>
    </div>
    <div>
      <span>작성자 : </span><input type="text" v-bind:value="boards.createdById" readonly>
    </div>
    <div>
      <span>조회수 : </span><input type="text" v-bind:value="boards.viewCnt" readonly>
    </div>
    <div>
      <span>게시판 제목 : </span><input type="text" v-bind:value="boards.subJect" readonly>
    </div>
    <div>
      <span>파일 : </span>
      <template v-if="attachfile != null">
        <a :href="'http://localhost:8081/boards/download/' + attachfile.attachSeq">
          {{ attachfile.attachFileName }}
        </a>
      </template>
    </div>
    <div>
      <span>게시판 내용 : </span><textarea v-model="boards.contents" readonly></textarea>
    </div>
    <div>
      <input v-on:click="modifyBoard(boards.boardSeq)" type="button" value="수정">
      <input v-on:click="deleteBoard" type="button" value="삭제">
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardsDetail",
  data() {
    return {
      boards: {},
      attachfile: {},
      number : this.$route.params.bbsSeq
    }
  },
  methods: {
    deleteBoard() {
      this.axios.delete(`/boards/${this.number}`).then(res => {
        res;
        window.location.href = '/boards';
      })
    },
    modifyBoard(boardSeq) {
      window.location.href = '/boards/modify/' + boardSeq;
    }
  },
  created() {
    console.log(this.number)
    this.axios.get(`/boards/${this.number}`).then(res => {
      console.log(res.data);
      this.boards = res.data;
      this.attachfile = res.data.attachFileDtoRes;
    });
  }
}
</script>

<style scoped>

</style>