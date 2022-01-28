let baseUrl = "http://2022.scxhlz.com/api/";

function checkPlatform() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return "pc";
  } else if (ua.indexOf("iphone") > 0 || ua.indexOf("android") > 0) {
    return "mobile";
  }
  return "pc";
}

function ifJumpTo(url) {
  let foundPlatform = checkPlatform();
  let vars = url.split("/");
  if (vars.length > 1) {
    if (vars[1] != foundPlatform) {
      window.location.href = url.replace(vars[1], foundPlatform);
    }
  }
}

export { baseUrl, ifJumpTo };
