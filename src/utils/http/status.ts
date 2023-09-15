import sys from "./enum";
import { message } from "../message";

// 创建队列

export function handleSystemStatus(
  status: number | string,
  msg?: string
): void {
  if (status !== 401) {
    let errMessage = "";
    switch (status) {
      case 400:
        errMessage = `${msg}`;
        break;
      case 401:
        errMessage = sys.api.errMsg401;
        break;
      case 403:
        errMessage = sys.api.errMsg403;
        break;
      // 404请求不存在
      case 404:
        errMessage = sys.api.errMsg404;
        break;
      case 405:
        errMessage = sys.api.errMsg405;
        break;
      case 408:
        errMessage = sys.api.errMsg408;
        break;
      case 500:
        errMessage = sys.api.errMsg500;
        break;
      case 501:
        errMessage = sys.api.errMsg501;
        break;
      case 502:
        errMessage = sys.api.errMsg502;
        break;
      case 503:
        errMessage = sys.api.errMsg503;
        break;
      case 504:
        errMessage = sys.api.errMsg504;
        break;
      case 505:
        errMessage = sys.api.errMsg505;
        break;
      case "Network Error":
        errMessage = sys.api.networkExceptionMsg;
        break;
      case "ECONNABORTED":
        errMessage = sys.api.apiTimeoutMessage;
        break;
      case "ABNORMAL":
        errMessage = sys.api.apiRequestFailed;
        break;
      default:
    }
    // 存在错误信息就提示
    errMessage &&
      message(errMessage, {
        type: "error"
      });
    return;
  }
}

// 异常状态码
export const CodeEnum = ["103107", "103104", "103105", "103109", "103102"];

// 异常状态码处理
export const handlerAbnormalCode = (code: string, msg?: string): void => {
  // 用户名密码错误多次提交需要多次提示 '103111', '291003'
  switch (code) {
    case "103107":
      break;
    case "103104":
      break;
    case "103105":
      break;
    default:
      console.log(">>>>>:code", code, ">>>>>:msg", msg);
  }
};
