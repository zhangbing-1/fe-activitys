$(function() {
  var dom = $('#container'),androidPath = '';
  function bindEvent() {
    dom.on('click', '.btn', function(e) {
      if(!common.isPhone && common.isWeixin){
        location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.zongjie.zongjieclientandroid&channel=0002160650432d595942&fromcase=60001';
      }else if(common.isPhone){
        location.href = 'https://itunes.apple.com/cn/app/%E7%88%B1%E6%80%BB%E7%BB%93/id1377039393?mt=8';
      }else{
        location.href = androidPath;
      }
    })
  }

  common.actions.getVersion().done(function(res){
    if(res.code == 0){
      androidPath = res.data.releasePath;
    }
    bindEvent();
  })
});