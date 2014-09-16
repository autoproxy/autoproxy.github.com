function FindProxyForURL(url, host) {
	 var regexStr = /.*?:\/\/.*?(youku|qiyi|iqiyi|letv|sohu|ku6|ku6cdn|pps)\.(com|tv)\/crossdomain\.xml/;
  if(regexStr.test(url)){
     return 'PROXY api.youku.com:80';
  }
  return 'DIRECT';
}