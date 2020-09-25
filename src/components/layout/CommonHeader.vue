<template>
    <div id="wrap">
        <router-link to="/">메인</router-link>/
        <router-link to="/boards">게시판</router-link>/
        <router-link to="/login">로그인</router-link>/
        <router-link to="/signup">회원가입</router-link>
        <!--<div id="header">
            <div class="wrap">
                <div class="clearfix">
                    <h1 id="logo"><a href="/home/main.php"><img src="imgs/header/logo.gif" alt="청주시선"></a></h1>
                    <div id="gnb" class="gnb00">
                        <ul class="gnb01">
                            <li><a href="./sub.php?menukey=20003">패널가입</a></li>
                            <li class="login"><a href="sub.php?menukey=20015&amp;refcode=1">로그인</a></li>

                            <li class="sitemap"><a href="./sub.php?menukey=20025">사이트맵</a></li>
                        </ul>
                    </div>

                    <div class="main_search">
                        <form name="searchForm" action="sub.php" method="get" title="통합검색">
                            <input type="hidden" name="menukey" value="20023">
                            <fieldset>
                                <legend>통합검색</legend>
                                <div class="select">
                                    <button type="submit" class="search_btn" title="검색(새창)" src="/base/imgs/cmmn/search_btn_00000004.png" onclick="return true;"><img src="/base/imgs/cmmn/search_btn.png" alt="검색버튼"></button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div class="top_link">
                        <a href="http://www.cheongju.go.kr/www/index.do" target="_blank" title="새창" class="cheongju_city">청주시청</a>
                        <a href="https://idea.cheongju.go.kr/main.do" target="_blank" title="새창" class="idea">청주1번가</a>
                    </div>
                </div>						<div id="lnb" class="clearfix"><ul id="top1menu" class="clearfix"><li class="top2hover"><a href="sub.php?menukey=20002" id="top1m1" class="menu1th top_menu1">청주시선 소개<br><span>시선이유</span></a><div id="top2m1" class="top2m" style="display: none;"><ul><li class="lnb11"><a href="sub.php?menukey=20002" class="off">청주시선이란?</a></li><li class="lnb12"><a href="sub.php?menukey=20003" class="off">시민패널 가입</a></li></ul></div></li><li class="top2hover"><a href="sub.php?menukey=20013" id="top1m2" class="menu1th top_menu2">조사/결과<br><span>시선집중</span></a><div id="top2m2" class="top2m" style="display: none;"><ul><li class="lnb21"><a href="sub.php?menukey=20013" class="off">시선뉴스</a></li><li class="lnb22"><a href="sub.php?menukey=20010" class="off">여론조사참여</a></li><li class="lnb23"><a href="sub.php?menukey=20011" class="off">인포그래픽</a></li><li class="lnb24"><a href="sub.php?menukey=20012" class="off">카드뉴스</a></li></ul></div></li><li class="top2hover"><a href="sub.php?menukey=20006" id="top1m3" class="menu1th top_menu3">공지사항<br><span>시선알림</span></a><div id="top2m3" class="top2m" style="display: none;"><ul><li class="lnb31"><a href="sub.php?menukey=20006" class="off">알립니다</a></li></ul></div></li><li class="top2hover"><a href="sub.php?menukey=20015" id="top1m4" class="menu1th top_menu4">마이페이지<br><span>나의시선</span></a><div id="top2m4" class="top2m" style="display: none;"><ul><li class="lnb41"><a href="sub.php?menukey=20015" class="off">로그인</a></li></ul></div></li><li class="top2hover"><a href="sub.php?menukey=20021" id="top1m5" class="menu1th top_menu5">고객센터<br><span>시선문의</span></a><div id="top2m5" class="top2m" style="display: none;"><ul><li class="lnb51"><a href="sub.php?menukey=20021" class="off">자주묻는질문</a></li><li class="lnb52"><a href="sub.php?menukey=20022" class="off">1:1 문의하기</a></li></ul></div></li></ul></div>
                &lt;!&ndash;<div id="site_btn">
                    <a href="sub.php?menukey=20025"><img src="/base/imgs/cmmn/all_btn.png" alt="전체메뉴" /></a>
                </div>&ndash;&gt;						<div class="h_m_mn">
                <a href="" id="btn_search">검색열기</a>
                <a href="" id="open_mn">메뉴열기</a>
            </div>

                <div id="m_search">
                    <div class="keyword">
                        <div class="m_srch_tit">통합검색</div>
                        <form name="searchForm" action="sub.php" method="get" target="_blank" title="통합검색 새창">
                            <input type="hidden" name="menukey" value="20023">
                            <fieldset class="totalSearch">
                                <legend class="skip">통합검색</legend>
                                <label class="skip" for="m_searchKwd">검색어 입력</label>
                                <input type="text" id="m_searchKwd" name="kwd" class="kwdbox" onfocus="this.value = '';" value="검색어를 입력하세요" title="검색어 입력박스" style="width:70%;">
                                <button type="submit" style="width:70%;">검색</button>
                            </fieldset>
                        </form>
                    </div>
                    <div id="srch_close">
                        <a href="">검색닫기</a>
                    </div>
                </div>

                <div id="topmenu">
                    <div class="g_link clearfix">
                        <a href="sub.php?menukey=20015&amp;refcode=1" id="btnLogin" class="login">로그인</a>
                        <a href="" class="join">회원가입</a>
                        <a href="" class="web">웹하드<span></span></a>
                    </div>
                    <ul id="lnb_device"><li class="top2hover"><a href="sub.php?menukey=20002" id="top1m1" class="menu1th top_menu1">청주시선 소개<br><span>시선이유</span></a><div id="top2m1" class="top2m" style="display: none;"><ul><li class="lnb11"><a href="sub.php?menukey=20002" class="off">청주시선이란?</a></li><li class="lnb12"><a href="sub.php?menukey=20003" class="off">시민패널 가입</a></li></ul></div></li><li class="top2hover"><a href="sub.php?menukey=20013" id="top1m2" class="menu1th top_menu2">조사/결과<br><span>시선집중</span></a><div id="top2m2" class="top2m" style="display: none;"><ul><li class="lnb21"><a href="sub.php?menukey=20013" class="off">시선뉴스</a></li><li class="lnb22"><a href="sub.php?menukey=20010" class="off">여론조사참여</a></li><li class="lnb23"><a href="sub.php?menukey=20011" class="off">인포그래픽</a></li><li class="lnb24"><a href="sub.php?menukey=20012" class="off">카드뉴스</a></li></ul></div></li><li class="top2hover"><a href="sub.php?menukey=20006" id="top1m3" class="menu1th top_menu3">공지사항<br><span>시선알림</span></a><div id="top2m3" class="top2m" style="display: none;"><ul><li class="lnb31"><a href="sub.php?menukey=20006" class="off">알립니다</a></li></ul></div></li><li class="top2hover"><a href="sub.php?menukey=20015" id="top1m4" class="menu1th top_menu4">마이페이지<br><span>나의시선</span></a><div id="top2m4" class="top2m" style="display: none;"><ul><li class="lnb41"><a href="sub.php?menukey=20015" class="off">로그인</a></li></ul></div></li><li class="top2hover"><a href="sub.php?menukey=20021" id="top1m5" class="menu1th top_menu5">고객센터<br><span>시선문의</span></a><div id="top2m5" class="top2m" style="display: none;"><ul><li class="lnb51"><a href="sub.php?menukey=20021" class="off">자주묻는질문</a></li><li class="lnb52"><a href="sub.php?menukey=20022" class="off">1:1 문의하기</a></li></ul></div></li></ul>
                    <div id="m_close">
                        <a href="">메뉴닫기</a>
                    </div>
                </div>					</div>
        </div>
        <div id="content">
            <div class="main_visual">
                <div class="list1 item">
                    <div class="visual_text">
                        <img src="imgs/main/visual_text.png" alt="시민참여 소통 플랫폼 청주시선">
                    </div>
                    <div class="visual_btn" style="animation-name: hvr-icon-wobble-horizontal; animation-duration: 2s; animation-iteration-count: infinite; animation-fill-mode: forwards; ">
                        <a href="./sub.php?menukey=20010" title="새창이동"><img src="imgs/main/visual_btn.png" alt="진행중인 조사 참여하기"></a>
                    </div>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "CommonHeader"
    }
</script>

<style scoped>

</style>