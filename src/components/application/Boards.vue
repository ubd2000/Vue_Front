<template>
    <!--<div id="wrapper">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">공지사항</h6>
            </div>
            <div>
                전체 {{pageInfo.totalElements}} - [{{pageInfo.number + 1}}/{{pageInfo.totalPages}}] 페이지
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>등록일</th>
                            <th>조회</th>
                            <th>첨부</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(board, index) in pageInfo.content">
                            <td>{{index + 1}}</td>
                            <td>{{board.subJect}}</td>
                            <td>{{board.createdById}}</td>
                            <td>{{board.createdAt}}</td>
                            <td>{{board.viewCnt}}</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <router-link to="/boardswrite">글쓰기</router-link>
            </div>
        </div>
    </div>-->
    <div class="container-fluid">

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">청주시선 게시판</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="dataTables_length" id="dataTable_length"><label>Show
                                  <select v-on:change="boardlist" v-model="pageSize"
                                        name="dataTable_length" aria-controls="dataTable"
                                        class="custom-select custom-select-sm form-control form-control-sm">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select> entries</label></div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div id="dataTable_filter" class="dataTables_filter"><label>Search:<input type="search"
                                                                                                          class="form-control form-control-sm"
                                                                                                          placeholder=""
                                                                                                          aria-controls="dataTable"></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <table class="table table-bordered dataTable" id="dataTable" width="100%"
                                       cellspacing="0" role="grid" aria-describedby="dataTable_info"
                                       style="width: 100%;">
                                    <thead>
                                    <tr role="row">
                                        <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1"
                                            colspan="1" aria-sort="ascending"
                                            aria-label="Name: activate to sort column descending" style="width: 74px;">
                                            번호
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1"
                                            colspan="1" aria-label="Position: activate to sort column ascending"
                                            style="width: 108px;">제목
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1"
                                            colspan="1" aria-label="Office: activate to sort column ascending"
                                            style="width: 55px;">작성자
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1"
                                            colspan="1" aria-label="Age: activate to sort column ascending"
                                            style="width: 31px;">등록일
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1"
                                            colspan="1" aria-label="Start date: activate to sort column ascending"
                                            style="width: 68px;">조회
                                        </th>
                                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1"
                                            colspan="1" aria-label="Salary: activate to sort column ascending"
                                            style="width: 67px;">첨부
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr role="row" class="odd" v-for="(board, index) in pageInfo.content" v-bind:key="index">
                                        <td class="sorting_1">{{board.boardSeq}}</td>
                                        <td><router-link :to="/boards/ + board.boardSeq"> {{board.subJect}} </router-link></td>
                                        <td>{{board.createdById}}</td>
                                        <td>{{board.createdAt}}</td>
                                        <td>{{board.viewCnt}}</td>
                                        <td>{{board.attachFileName}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-5">
                                <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">
                                    Showing 1 to 10 of 57 entries
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-7">
                                <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                    <ul class="pagination">
                                        <li :class="{disabled: isPreDisabled}" class="paginate_button page-item previous" id="dataTable_previous">
                                            <a v-on:click="boardlist(pageList[0] - 1)" href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0"
                                               class="page-link">Previous</a></li>
                                        <li v-for="(page, index) in pageList" :key="page" class="paginate_button page-item active"><a v-on:click="boardlist(page)" href="#"
                                                                                        aria-controls="dataTable"
                                                                                        :data-dt-idx="index+1" tabindex="0"
                                                                                        class="page-link">{{ page }}</a></li>
                                        <li :class="{disabled : isNextDisabled}" class="paginate_button page-item next" id="dataTable_next"><a v-on:click="boardlist(pageList[pageList.length - 1] + 1)" href="#"
                                                                                                          aria-controls="dataTable"
                                                                                                          data-dt-idx="0"
                                                                                                          tabindex="0"
                                                                                                          class="page-link">Next</a>
                                        </li>
                                    </ul>
                                    <div>
                                        <router-link to="/boards/write">글쓰기</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "Boards",
        data() {
            return {
                pageInfo: {},
                pageSize: '5',
                pageNumb : 0,
                pageList : {},
                isPreDisabled : false,
                isNextDisabled : false
            }
        },
      methods: {
          boardlist(numb) {
            this.pageNumb = numb;
            this.axios.get('/boards', {
              params: {
                size : this.pageSize,
                page : numb - 1,
                sort : 'boardSeq,desc'
              }
            }).then((res) => {
              this.pageInfo = res.boardList;
              this.pageList = res.pageList;
              (this.pageList[0] < 6) ? this.isPreDisabled = true : this.isPreDisabled = false;
              (this.pageInfo.totalPages == this.pageList[this.pageList.length - 1]) ? this.isNextDisabled = true : this.isNextDisabled = false;
            });
          }
      },
        created() {
          this.boardlist();
        }
    }
</script>

<style scoped>
</style>