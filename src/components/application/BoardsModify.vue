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
      <span>게시판 제목 : </span><input type="text" v-bind:value="boards.subJect">
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
      <span>게시판 내용 : </span><textarea v-model="boards.contents"></textarea>
    </div>
    <div>
      <input v-on:click="modifyBoard(boards.boardSeq)" type="button" value="수정">
      <input v-on:click="deleteBoard" type="button" value="삭제">
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardsModify"
}
</script>

<style scoped>

</style>