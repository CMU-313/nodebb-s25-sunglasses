__report = {"info":{"file":"src/user/approval.js","fileShort":"src/user/approval.js","fileSafe":"src_user_approval_js","link":"files/src_user_approval_js/index.html"},"complexity":{"methodAggregate":{"cyclomatic":12,"cyclomaticDensity":10.084,"halstead":{"bugs":2.121,"difficulty":36.291,"effort":230972.045,"length":835,"time":12831.78,"vocabulary":197,"volume":6364.413,"operands":{"distinct":170,"total":457,"identifiers":["__stripped__"]},"operators":{"distinct":27,"total":378,"identifiers":["__stripped__"]}},"params":21,"sloc":{"logical":119,"physical":167}},"settings":{"commonjs":true,"forin":false,"logicalor":true,"switchcase":true,"trycatch":false,"newmi":true},"classes":[],"dependencies":[{"line":3,"path":"validator","type":"cjs"},{"line":4,"path":"winston","type":"cjs"},{"line":5,"path":"cron","type":"cjs"},{"line":7,"path":"../database","type":"cjs"},{"line":8,"path":"../meta","type":"cjs"},{"line":9,"path":"../emailer","type":"cjs"},{"line":10,"path":"../notifications","type":"cjs"},{"line":11,"path":"../groups","type":"cjs"},{"line":12,"path":"../utils","type":"cjs"},{"line":13,"path":"../slugify","type":"cjs"},{"line":14,"path":"../plugins","type":"cjs"}],"errors":[],"lineEnd":167,"lineStart":1,"maintainability":70.324,"methods":[{"cyclomatic":1,"cyclomaticDensity":8.333,"halstead":{"bugs":0.079,"difficulty":4.118,"effort":973.205,"length":53,"time":54.067,"vocabulary":22,"volume":236.35,"operands":{"distinct":17,"total":28,"identifiers":["__stripped__"]},"operators":{"distinct":5,"total":25,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":12,"physical":152},"errors":[],"lineEnd":167,"lineStart":16,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.003,"difficulty":1,"effort":8,"length":4,"time":0.444,"vocabulary":4,"volume":8,"operands":{"distinct":2,"total":2,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":2,"identifiers":["__stripped__"]}},"params":0,"sloc":{"logical":1,"physical":3},"errors":[],"lineEnd":19,"lineStart":17,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":6.667,"halstead":{"bugs":0.167,"difficulty":6.462,"effort":3230.769,"length":100,"time":179.487,"vocabulary":32,"volume":500,"operands":{"distinct":26,"total":56,"identifiers":["__stripped__"]},"operators":{"distinct":6,"total":44,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":15,"physical":16},"errors":[],"lineEnd":36,"lineStart":21,"name":"<anonymous>"},{"cyclomatic":4,"cyclomaticDensity":44.444,"halstead":{"bugs":0.134,"difficulty":9.326,"effort":3748.244,"length":79,"time":208.236,"vocabulary":34,"volume":401.91,"operands":{"distinct":23,"total":39,"identifiers":["__stripped__"]},"operators":{"distinct":11,"total":40,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":9,"physical":13},"errors":[],"lineEnd":50,"lineStart":38,"name":"canQueue"},{"cyclomatic":1,"cyclomaticDensity":0,"halstead":{"bugs":0.001,"difficulty":0,"effort":0,"length":3,"time":0,"vocabulary":2,"volume":3,"operands":{"distinct":2,"total":3,"identifiers":["__stripped__"]},"operators":{"distinct":0,"total":0,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":44,"lineStart":44,"name":"<anonymous>"},{"cyclomatic":2,"cyclomaticDensity":0,"halstead":{"bugs":0.004,"difficulty":2,"effort":24,"length":6,"time":1.333,"vocabulary":4,"volume":12,"operands":{"distinct":2,"total":4,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":2,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":46,"lineStart":46,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":14.286,"halstead":{"bugs":0.049,"difficulty":3.938,"effort":579.447,"length":33,"time":32.192,"vocabulary":22,"volume":147.161,"operands":{"distinct":16,"total":21,"identifiers":["__stripped__"]},"operators":{"distinct":6,"total":12,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":7,"physical":10},"errors":[],"lineEnd":61,"lineStart":52,"name":"sendNotificationToAdmins"},{"cyclomatic":4,"cyclomaticDensity":19.048,"halstead":{"bugs":0.288,"difficulty":11.765,"effort":10168.804,"length":143,"time":564.934,"vocabulary":66,"volume":864.348,"operands":{"distinct":51,"total":80,"identifiers":["__stripped__"]},"operators":{"distinct":15,"total":63,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":21,"physical":25},"errors":[],"lineEnd":87,"lineStart":63,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":0,"halstead":{"bugs":0.008,"difficulty":1.2,"effort":30.319,"length":9,"time":1.684,"vocabulary":7,"volume":25.266,"operands":{"distinct":5,"total":6,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":3,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":82,"lineStart":82,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":25,"halstead":{"bugs":0.042,"difficulty":3.692,"effort":470.54,"length":30,"time":26.141,"vocabulary":19,"volume":127.438,"operands":{"distinct":13,"total":16,"identifiers":["__stripped__"]},"operators":{"distinct":6,"total":14,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":4,"physical":6},"errors":[],"lineEnd":94,"lineStart":89,"name":"markNotificationRead"},{"cyclomatic":1,"cyclomaticDensity":0,"halstead":{"bugs":0.006,"difficulty":1.25,"effort":22.618,"length":7,"time":1.257,"vocabulary":6,"volume":18.095,"operands":{"distinct":4,"total":5,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":2,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":92,"lineStart":92,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":50,"halstead":{"bugs":0.005,"difficulty":0.833,"effort":11.667,"length":7,"time":0.648,"vocabulary":4,"volume":14,"operands":{"distinct":3,"total":5,"identifiers":["__stripped__"]},"operators":{"distinct":1,"total":2,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":2,"physical":4},"errors":[],"lineEnd":99,"lineStart":96,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.021,"difficulty":2.063,"effort":128.431,"length":18,"time":7.135,"vocabulary":11,"volume":62.27,"operands":{"distinct":8,"total":11,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":7,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":1,"physical":6},"errors":[],"lineEnd":106,"lineStart":101,"name":"removeFromQueue"},{"cyclomatic":3,"cyclomaticDensity":33.333,"halstead":{"bugs":0.054,"difficulty":6.923,"effort":1127.411,"length":36,"time":62.634,"vocabulary":23,"volume":162.848,"operands":{"distinct":13,"total":18,"identifiers":["__stripped__"]},"operators":{"distinct":10,"total":18,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":9,"physical":10},"errors":[],"lineEnd":117,"lineStart":108,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":12.5,"halstead":{"bugs":0.112,"difficulty":8.289,"effort":2789.531,"length":70,"time":154.974,"vocabulary":28,"volume":336.515,"operands":{"distinct":19,"total":35,"identifiers":["__stripped__"]},"operators":{"distinct":9,"total":35,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":8,"physical":31},"errors":[],"lineEnd":149,"lineStart":119,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":0,"halstead":{"bugs":0.003,"difficulty":0.667,"effort":6.667,"length":5,"time":0.37,"vocabulary":4,"volume":10,"operands":{"distinct":3,"total":4,"identifiers":["__stripped__"]},"operators":{"distinct":1,"total":1,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":121,"lineStart":121,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":20,"halstead":{"bugs":0.067,"difficulty":4.643,"effort":926.958,"length":47,"time":51.498,"vocabulary":19,"volume":199.653,"operands":{"distinct":14,"total":26,"identifiers":["__stripped__"]},"operators":{"distinct":5,"total":21,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":5,"physical":7},"errors":[],"lineEnd":129,"lineStart":123,"name":"<anonymous>"},{"cyclomatic":2,"cyclomaticDensity":66.667,"halstead":{"bugs":0.03,"difficulty":5,"effort":448.12,"length":25,"time":24.896,"vocabulary":12,"volume":89.624,"operands":{"distinct":7,"total":14,"identifiers":["__stripped__"]},"operators":{"distinct":5,"total":11,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":3,"physical":16},"errors":[],"lineEnd":145,"lineStart":130,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":50,"halstead":{"bugs":0.042,"difficulty":3.857,"effort":483.439,"length":29,"time":26.858,"vocabulary":20,"volume":125.336,"operands":{"distinct":14,"total":18,"identifiers":["__stripped__"]},"operators":{"distinct":6,"total":11,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":2,"physical":4},"errors":[],"lineEnd":154,"lineStart":151,"name":"getIPMatchedUsers"},{"cyclomatic":2,"cyclomaticDensity":28.571,"halstead":{"bugs":0.066,"difficulty":6.25,"effort":1233.865,"length":42,"time":68.548,"vocabulary":26,"volume":197.418,"operands":{"distinct":16,"total":20,"identifiers":["__stripped__"]},"operators":{"distinct":10,"total":22,"identifiers":["__stripped__"]}},"params":0,"sloc":{"logical":7,"physical":11},"errors":[],"lineEnd":166,"lineStart":156,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":0,"halstead":{"bugs":0.016,"difficulty":2.286,"effort":110.702,"length":14,"time":6.15,"vocabulary":11,"volume":48.432,"operands":{"distinct":7,"total":8,"identifiers":["__stripped__"]},"operators":{"distinct":4,"total":6,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":162,"lineStart":162,"name":"<anonymous>"}],"methodAverage":{"cyclomatic":1.524,"cyclomaticDensity":27.564,"halstead":{"bugs":0.057,"difficulty":4.074,"effort":1262.988,"length":36.19,"time":70.166,"vocabulary":17.905,"volume":170.936,"operands":{"distinct":12.619,"total":19.952},"operators":{"distinct":5.286,"total":16.238}},"params":1,"sloc":{"logical":5.048,"physical":15.238}},"module":"src/user/approval.js"},"jshint":{"messages":[{"severity":"error","line":1,"column":1,"message":"Use the function form of \"use strict\".","source":"Use the function form of \"use strict\"."},{"severity":"error","line":3,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":4,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":5,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":7,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":8,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":9,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":10,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":11,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":12,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":13,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":14,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":17,"column":32,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":21,"column":36,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":21,"column":46,"message":"Missing name in function declaration.","source":"Missing name in function declaration."},{"severity":"error","line":24,"column":9,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":24,"column":14,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":25,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":25,"column":37,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":26,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":32,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":32,"column":30,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":33,"column":9,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":33,"column":14,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":33,"column":28,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":34,"column":9,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":34,"column":14,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":35,"column":9,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":35,"column":14,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":36,"column":6,"message":"Unnecessary semicolon.","source":"Unnecessary semicolon."},{"severity":"error","line":38,"column":5,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":38,"column":10,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":39,"column":9,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":39,"column":14,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":40,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":40,"column":32,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":44,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":44,"column":64,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":44,"column":61,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":45,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":45,"column":27,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":46,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":46,"column":38,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":52,"column":5,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":52,"column":10,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":53,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":53,"column":31,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":55,"column":24,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":56,"column":18,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":60,"column":9,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":60,"column":9,"message":"Too many errors. (35% scanned).","source":"Too many errors."}]}}