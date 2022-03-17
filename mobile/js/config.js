let baseUrl = "http://2022.scxhlz.com/api/";
let maxClickTimesInOneDay = 1;//一天中对应同一个资源最大点赞数
let maxClickTimesMsg = "今日点赞已达上限";

function checkPlatform() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // return "pc";
  } else if (ua.indexOf("iphone") > 0 || ua.indexOf("android") > 0) {
    return "mobile";
  }
  // return "pc";
}

function ifJumpTo(url) {/*
<<<<<<< .mine
  // let foundPlatform = checkPlatform();
  // let vars = url.split("/");
  // if (vars.length > 1) {
  //   if (vars[1] != foundPlatform) {
  //     window.location.href = url.replace(vars[1], foundPlatform);
  //   }
  // }
||||||| .r193
  let foundPlatform = checkPlatform();
  let vars = url.split("/");
  if (vars.length > 1) {
    if (vars[1] != foundPlatform) {
      window.location.href = url.replace(vars[1], foundPlatform);
    }
  }
=======
  let foundPlatform = checkPlatform();
  let vars = url.split("/");
  if (vars.length > 1) {
    if (vars[1] != foundPlatform) {
      window.location.href = url.replace(vars[1], foundPlatform);
    }
  }*/
}

export { baseUrl, ifJumpTo, maxClickTimesInOneDay, maxClickTimesMsg };
