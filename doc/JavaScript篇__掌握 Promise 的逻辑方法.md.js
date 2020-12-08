(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{onmX:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),r=(n("B2uJ"),n("+su7"),n("qOys")),m=n.n(r);n("5Yjd");a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"promise-\u7684\u903b\u8f91\u65b9\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#promise-\u7684\u903b\u8f91\u65b9\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"Promise \u7684\u903b\u8f91\u65b9\u6cd5"),l.a.createElement("p",null,"Promise \u5bf9\u8c61\u6709\u51e0\u4e2a\u7ec4\u5408\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5c06\u591a\u4e2a\u627f\u8bfa\u5408\u5e76\u6210\u4e00\u4e2a\u8fdb\u884c\u5904\u7406"),l.a.createElement("p",null,"\u5206\u522b\u662f Promise.all, Promise.race, Promise.allSettled, Promise.any"),l.a.createElement("p",null,"\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u53ef\u4ee5\u63a5\u6536\u4e00\u7ec4\u627f\u8bfa\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u627f\u8bfa"),l.a.createElement(m.a,{code:"Promise.all(values)\n",lang:"javascript"}),l.a.createElement("p",null,"\u5176\u4e2d\u53c2\u6570 values \u662f\u4e00\u4e2a\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff0c\u6bd4\u5982\u6570\u7ec4"),l.a.createElement("p",null,"\u5728\u540e\u6587\u4e2d\u4f7f\u7528\u8bcd\u8bed\u201c\u6210\u529f\u201d\u8868\u793a\u627f\u8bfa resolve\uff0c\u201c\u5931\u8d25\u201d\u8868\u793a\u627f\u8bfa reject"),l.a.createElement("h3",{id:"promiseall"},l.a.createElement("a",{"aria-hidden":"true",href:"#promiseall"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"Promise.all")),l.a.createElement("p",null,"Promise.all \u65b9\u6cd5\u8fd4\u56de\u7684\u627f\u8bfa\u4f1a\u7b49\u5230\u53c2\u6570\u4e2d\u6240\u6709\u7684\u627f\u8bfa\u90fd\u6210\u529f\u4e4b\u540e\u624d\u4f1a\u6210\u529f\uff0c\u53ea\u8981\u5176\u4e2d\u6709\u4e00\u4e2a\u5931\u8d25\u4e86\u5219\u8fd4\u56de\u7684\u627f\u8bfa\u4e5f\u4f1a\u7acb\u5373\u5931\u8d25\uff0c\u4e0d\u4f1a\u7b49\u5230\u90a3\u4e9b\u8fd8\u6302\u8d77\u7684\u627f\u8bfa\u6709\u7ed3\u679c"),l.a.createElement("p",null,l.a.createElement("img",{src:"http://my.flytodream.cn/docImgage/54543534.jpg",alt:"img"})),l.a.createElement("p",null,"Promise.all \u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u5904\u7406\u90a3\u4e9b\u7f3a\u4e00\u4e0d\u53ef\u7684\u903b\u8f91"),l.a.createElement("p",null,"\u793a\u4f8b\uff1a\u540c\u65f6\u53d1\u51fa\u591a\u4e2a\u8bf7\u6c42\u90fd\u6210\u529f\u540e\u624d\u80fd\u8fdb\u884c\u4e0b\u4e00\u6b65"),l.a.createElement(m.a,{code:"const coffee = fetch('/coffee')\nconst tea = fetch('/tea')\nconst me = fetch('/me')\n\n// \u6211\u5168\u90fd\u8981\nconst res = await Promise.all([coffee, tea, me])\n",lang:"javascript"}),l.a.createElement("h3",{id:"promiserace"},l.a.createElement("a",{"aria-hidden":"true",href:"#promiserace"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"Promise.race")),l.a.createElement("p",null,"Promise.race \u65b9\u6cd5\u8fd4\u56de\u53c2\u6570\u4e2d\u6700\u5feb\u7684\u90a3\u4e2a\u627f\u8bfa\uff0c\u5982\u679c\u6700\u5feb\u7684\u90a3\u4e2a\u627f\u8bfa\u6210\u529f\u5219\u8fd4\u56de\u7684\u627f\u8bfa\u4e5f\u4f1a\u6210\u529f\uff0c\u5426\u5219\u5c31\u662f\u5931\u8d25\uff0c\u4e0d\u4f1a\u7b49\u5230\u90a3\u4e9b\u8fd8\u6302\u8d77\u7684\u627f\u8bfa\u6709\u7ed3\u679c"),l.a.createElement("p",null,l.a.createElement("img",{src:"http://my.flytodream.cn/docImgage/5345789347583458.jpg",alt:"img"})),l.a.createElement("p",null,"\u793a\u4f8b\uff1a\u7ed9\u4e00\u4e2a\u590d\u6742\u4efb\u52a1\u8bbe\u5b9a\u4e00\u4e2a\u8d85\u65f6\u65f6\u95f4"),l.a.createElement(m.a,{code:"// \u8bbe\u7f6e\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u65f6\u95f4\u5230\u4e86\u5c31 reject \u4e00\u4e2a\u627f\u8bfa\nconst timeout = new Promise((resolve, reject) => {\n  setTimeout(reject, 3000)\n})\n\nconst missions = fetch('/missions')\n\ntry {\n  const res = await Promise.race([timeout, missions])\n  // missions \u4efb\u52a1\u6210\u529f\n} catch () {\n  // \u65f6\u95f4\u8d85\u8fc7 3 \u79d2\u4e86\u6216\u8005\u4efb\u52a1\u5931\u8d25\u4e86\n}\n",lang:"javascript"}),l.a.createElement("h3",{id:"promiseallsettled"},l.a.createElement("a",{"aria-hidden":"true",href:"#promiseallsettled"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"Promise.allSettled")),l.a.createElement("p",null,"Promise.allSettled \u65b9\u6cd5\u8fd4\u56de\u7684\u627f\u8bfa\u5bf9\u8c61\u4f1a\u7b49\u5230\u53c2\u6570\u4e2d\u6240\u6709\u7684\u627f\u8bfa\u5bf9\u8c61\u90fd\u5b8c\u6210\u540e\u624d\u6210\u529f\uff0c\u65e0\u8bba\u600e\u6837\u8be5\u65b9\u6cd5\u8fd4\u56de\u7684\u627f\u8bfa\u90fd\u4e0d\u4f1a\u5931\u8d25"),l.a.createElement("p",null,l.a.createElement("img",{src:"http://my.flytodream.cn/docImgage/83222342.jpg",alt:"img"})),l.a.createElement("p",null,l.a.createElement("strong",null,"\u548c Promise.all \u65b9\u6cd5\u7684\u533a\u522b")),l.a.createElement("p",null,"Promise.all \u65b9\u6cd5\u9700\u8981\u53c2\u6570\u4e2d\u7684\u6240\u6709\u627f\u8bfa\u90fd\u6210\u529f"),l.a.createElement("p",null,"\u800c Promise.allSettled \u5bf9\u53c2\u6570\u4e2d\u7684\u627f\u8bfa\u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25\u5e76\u4e0d\u5173\u5fc3\uff0c\u53ea\u8981\u6709\u7ed3\u679c\u5c31\u884c"),l.a.createElement("p",null,"\u793a\u4f8b\uff1a\u4e00\u6b21\u6027\u4e0a\u4f20\u591a\u4e2a\u6587\u4ef6\uff0c\u5176\u4e2d\u4e0a\u4f20\u6210\u529f\u548c\u4e0a\u4f20\u5931\u8d25\u7684\u4e92\u4e0d\u5f71\u54cd\uff0c\u5728\u4e00\u8f6e\u4e0a\u4f20\u4efb\u52a1\u5b8c\u6210\u4e4b\u540e\uff0c\u53ef\u4ee5\u7b5b\u9009\u51fa\u90a3\u4e9b\u4e0a\u4f20\u5931\u8d25\u7684\u91cd\u65b0\u4e0a\u4f20\u3002"),l.a.createElement(m.a,{code:"const upload = file => {\n  const formData = new FormData()\n  formData.append('file', file)\n  return fetch('/upload', {\n    method: 'POST',\n    body: formData\n  })\n}\n\ndocument.querySelector('input[type=\"file\"]').addEventListener('change', function(e) {\n  if (!e.target.value) return\n  const files = e.target.files\n  const promises = files.map(file => upload(file))\n\n  const res = await Promise.allSettled(promises)\n  // \u5168\u90e8\u4e0a\u4f20\u4efb\u52a1\u90fd\u5b8c\u6210\u4e86\uff0c\u627e\u51fa\u4e0a\u4f20\u5931\u8d25\u7684\u91cd\u65b0\u4e0a\u4f20\n})\n",lang:"javascript"}),l.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u662f ES2020 \u65b0\u6dfb\u52a0\u7684\u65b9\u6cd5"),l.a.createElement("h3",{id:"promiseany"},l.a.createElement("a",{"aria-hidden":"true",href:"#promiseany"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"Promise.any")),l.a.createElement("p",null,"Promise.any \u65b9\u6cd5\u8fd4\u56de\u4e00\u7ec4\u627f\u8bfa\u4e2d\u6700\u5feb\u6210\u529f\u7684\u90a3\u4e2a\u627f\u8bfa\uff0c\u5982\u679c\u53c2\u6570\u4e2d\u6240\u6709\u627f\u8bfa\u90fd\u5931\u8d25\u4e86\uff0c\u90a3\u4e48\u8fd4\u56de\u7684\u627f\u8bfa\u4e5f\u5931\u8d25"),l.a.createElement("p",null,l.a.createElement("img",{src:"http://my.flytodream.cn/docImgage/4fsdfd.jpg",alt:"img"})),l.a.createElement("p",null,l.a.createElement("strong",null,"\u548c Promise.race \u65b9\u6cd5\u7684\u533a\u522b")),l.a.createElement("p",null,"Promise.race \u8fd4\u56de\u53c2\u6570\u4e2d\u6700\u5feb\u7684\u90a3\u4e2a\u627f\u8bfa\uff0c\u65e0\u8bba\u5b83\u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25"),l.a.createElement("p",null,"\u800c Promise.any \u5173\u6ce8\u7684\u662f\u53c2\u6570\u4e2d\u6700\u5feb\u540c\u65f6\u8fd8\u5fc5\u987b\u6210\u529f\u7684\u90a3\u4e2a\u627f\u8bfa"),l.a.createElement("p",null,"\u548c Promise.all \u65b9\u6cd5\u7684\u533a\u522b"),l.a.createElement("p",null,"Promise.any \u548c Promise.all \u662f\u5b8c\u5168\u76f8\u53cd\u7684"),l.a.createElement("p",null,"Promise.any \u53c2\u6570\u4e2d\u5168\u90e8\u627f\u8bfa\u90fd\u5931\u8d25\u4e86\u624d\u4f1a\u5931\u8d25\uff0cPromise.all \u53c2\u6570\u4e2d\u5168\u90e8\u627f\u8bfa\u90fd\u6210\u529f\u4e86\u624d\u4f1a\u6210\u529f"),l.a.createElement("p",null,"Promise.any \u53c2\u6570\u4e2d\u4e00\u65e6\u6709\u4e00\u4e2a\u627f\u8bfa\u6210\u529f\u4e86\u8fd4\u56de\u7684\u65b0\u627f\u8bfa\u5c31\u4f1a\u6210\u529f\uff0cPromise.all \u53c2\u6570\u4e2d\u4e00\u65e6\u6709\u4e00\u4e2a\u627f\u8bfa\u5931\u8d25\u4e86\u8fd4\u56de\u7684\u65b0\u627f\u8bfa\u5c31\u4f1a\u5931\u8d25"),l.a.createElement("p",null,"\u793a\u4f8b\uff1a\u540c\u65f6\u52a0\u8f7d\u4e00\u7ec4\u56fe\u7247\uff0c\u4f46\u662f\u6211\u4eec\u53ea\u9700\u8981\u7528\u5230\u5176\u4e2d\u7684\u4e00\u5f20\uff0c\u5c31\u53ef\u4ee5\u7528 Promise.any \u65b9\u6cd5\u6311\u9009\u51fa\u6700\u5148\u52a0\u8f7d\u6210\u529f\u7684\u90a3\u5f20\u56fe\u7247"),l.a.createElement(m.a,{code:"const fetchImg = async (url) => {\n  return fetch(url).then(res => {\n    if (!res.ok) {\n      throw new Error('HTTP error!')\n    } else {\n      return res.blob()\n    }\n  })\n}\n\ncosnt img1 = fetchImg('/1.png')\nconst img2 = fetchImg('/2.png')\n\ntry {\n  const res = await Promise.any([img1, img2])\n  const url = URL.createObjectURL(res)\n  const img = document.createElement('img')\n  img.src = url\n  document.body.appendChild(img)\n} catch () {\n  // \u4e00\u4e2a\u90fd\u6ca1\u52a0\u8f7d\u6210\u529f QAQ\n}\n",lang:"javascript"}),l.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u8fd8\u5904\u4e8e\u8349\u6848\u4e2d\uff0c\u76ee\u524d\u6700\u65b0\u7684 Chrome, Firefox, Safari \u652f\u6301\u3002")))}}}]);