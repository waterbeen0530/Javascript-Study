scr="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="crossorigin="anonymous">

    $(document).ready(function (){
      $("#search").click(function () {
        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: $("#bookName").val() },
        headers: {Authorization: "KakaoAK 9af4b9e0fc0a3c9890883b196ef2184e"}
    })
    .done(function( msg ) {
        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);
        $("p").append("<strong>"+ msg.documents[0].title+"</strong>");
        $("p").append("<img src='"+ msg.documents[0].thumbnail +"'/>");
    });
      })
    })