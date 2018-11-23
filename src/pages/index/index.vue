<template>
  <div class="index-container">
    <div class="banner" id='HomeBanner'>
      <div class="item"></div>
      <div class="item"></div>
      <div class="dots">
        <a href="javascript:void(0)" class="active"></a>
        <a href="javascript:void(0)"></a>
      </div>
    </div>
    <div class="p-2">
      <div class="inner">
        <a class="link"></a>
        <div class="cover">
          <img src="@/assets/2_left.png">
        </div>
        <div class="desc" id='Page2Desc'>
          <div class="item">
            <img src='@/assets/2_banner_1.jpg'>
          </div>
          <div class="item">
            <img src='@/assets/2_banner_2.jpg'>
          </div>
          <div class="item">
            <img src='@/assets/2_banner_3.jpg'>
          </div>
          <div class="dots">
            <a href="javascript: void(0)"></a>
            <a href="javascript: void(0)"></a>
            <a href="javascript: void(0)"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="p-3">
      <div class="inner">
        <a></a>
        <img src="@/assets/3_desc.png">
      </div>
    </div>
    <div class="p-4" id='p-4'>
      <div class="inner">
        <a></a>
        <img src="@/assets/4_desc.jpg">
      </div>
    </div>
    <div class="p-5">
      <li class="li1" id="li1">
        <div class="fold" style="display:none;">
        </div>
        <div class="unfold" style="display:block">
          <span></span>
        </div>
      </li>
      <li class="li2">
        <div class="fold">
        </div>
        <div class="unfold">
          <span></span>
        </div>
      </li>
      <li class="li3">
        <div class="fold"></div>
        <div class="unfold">
          <span></span>
        </div>
      </li>
      <li class="li4">
        <div class="fold"></div>
        <div class="unfold">
          <span></span>
        </div>
      </li>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      new Slide('#HomeBanner');
      new Slide('#Page2Desc');

      var pageWidth = $(document).width(),
          itemWidth = (pageWidth / 1920) * 762,
          foldWidth = (pageWidth / 1920) * 386;

      //语音通知手风琴效果
      $('.p-5').css({ height: (pageWidth / 1920) * 532 });
      $(".p-5 li").each(function () {
          var fold = $(this).find(".fold");
          var unfold = $(this).find(".unfold");
          $(this).css({ height: (pageWidth / 1920) * 532 });
          $(unfold).css({ paddingTop: (pageWidth / 1920) * 100, paddingLeft: (pageWidth / 1920) * 100 });
          if (fold.is(":hidden")) {
              $(this).width(itemWidth);
          }
          else {
              $(this).width(foldWidth);
          }
      })

      $(".p-5 li").click(function () {
          var li_index = $(this).index();
          $(this).animate({ width: itemWidth }, 200);
          $(this).find(".unfold").show();
          $(this).find(".fold").hide();
          $(this).siblings().animate({ width: foldWidth }, 200);
          $(this).siblings().find(".unfold").hide();
          $(this).siblings().find(".fold").show();
      })
    }
  }  
</script>
