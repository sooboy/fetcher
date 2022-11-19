const prefix = (code: string) => (code.charAt(0) === "6" ? "1" : "0");
const prefix2 = (code: string) => (code.charAt(0) === "6" ? "SH" : "SZ");

const prefixCode = (code: string) => `${prefix(code)}.${code}`;
const prefixCode2 = (code: string) => `${prefix2(code)}${code}`;

// 获取分钟线SSE
const minLine = (code: string) =>
	`https://35.push2.eastmoney.com/api/qt/stock/trends2/sse?fields1=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12&fields2=f51,f52,f53,f54,f55,f56,f57,f58&mpi=1000&ut=fa5fd1943c7b386f172d6893dbfba10b&secid=${prefixCode(code)}&ndays=1&iscr=0&iscca=0&wbp2u=|0|0|0|web`;
// 获取tick数据SSE
const tickLine = (code: string) =>
	`https://60.push2.eastmoney.com/api/qt/stock/details/sse?fields1=f1,f2,f3,f4&fields2=f51,f52,f53,f54,f55&mpi=1000&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&pos=-50&secid=${prefixCode(code)}&wbp2u=|0|0|0|web`;
// 获取资金流向
const moneyflow = (code: string) =>
	`https://push2.eastmoney.com/api/qt/stock/fflow/kline/get?lmt=0&klt=1&secid${prefixCode(code)}&fields1=f1&fields2=f51,f52,f53,f54,f55,f56`;
// Kline
const kline = (code: string) =>
	`http://10.push2his.eastmoney.com/api/qt/stock/kline/get?secid=${prefixCode(code)}&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5%2Cf6&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58%2Cf59%2Cf60%2Cf61&klt=101&fqt=1&end=20500101&lmt=120`;
const kline2 = (code: string) =>
    `http://56.push2his.eastmoney.com/api/qt/stock/kline/get?secid=${prefixCode(code)}&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5%2Cf6&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58%2Cf59%2Cf60%2Cf61&klt=101&fqt=1&end=20500101&lmt=120&_=1668869922791`
// 季度利润
const profitq = (code: string) =>
	`http://datacenter-web.eastmoney.com/api/data/v1/get?reportName=RPT_F10_FN_QUARTER&columns=SECURITY_CODE%2CREPORT_DATE%2CNET_PROFIT_Q&source=QuoteWeb&client=WEB&sortColumns=REPORT_DATE&filter=(SECUCODE%3D%22${prefixCode2(code)}%22)&sortTypes=-1&pageSize=12`;
// 走势图pic
const pic = (code: string) =>
    `https://webquotepic.eastmoney.com/GetPic.aspx?nid=${prefixCode(code)}&imageType=RJY`