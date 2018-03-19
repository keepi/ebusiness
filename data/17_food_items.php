<?php
$method = "GET";
// 请求示例 url 默认请求参数已经做URL编码
$url = "http://120.76.205.241:8000/product/pinduoduo?catid=226&apikey=7EJwqm3kU6H2gCjWfEPMMJJN8ZC0BE07ztFCth8e1wYSMHwgAYqfRIO8edprp1kh";
$curl = curl_init();
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_FAILONERROR, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_ENCODING, "gzip");

echo curl_exec($curl);