__report = {"info":{"file":"src/upgrades/1.1.0/assign_topic_read_privilege.js","fileShort":"src/upgrades/1.1.0/assign_topic_read_privilege.js","fileSafe":"src_upgrades_1_1_0_assign_topic_read_privilege_js","link":"files/src_upgrades_1_1_0_assign_topic_read_privilege_js/index.html"},"complexity":{"methodAggregate":{"cyclomatic":3,"cyclomaticDensity":11.538,"halstead":{"bugs":0.276,"difficulty":8.936,"effort":7401.565,"length":142,"time":411.198,"vocabulary":57,"volume":828.27,"operands":{"distinct":47,"total":84,"identifiers":["__stripped__"]},"operators":{"distinct":10,"total":58,"identifiers":["__stripped__"]}},"params":0,"sloc":{"logical":26,"physical":35}},"settings":{"commonjs":true,"forin":false,"logicalor":true,"switchcase":true,"trycatch":false,"newmi":true},"classes":[],"dependencies":[{"line":5,"path":"winston","type":"cjs"},{"line":6,"path":"../../database","type":"cjs"},{"line":12,"path":"../../groups","type":"cjs"},{"line":13,"path":"../../privileges","type":"cjs"}],"errors":[],"lineEnd":35,"lineStart":1,"maintainability":55.108,"methods":[{"cyclomatic":3,"cyclomaticDensity":15.789,"halstead":{"bugs":0.193,"difficulty":7.879,"effort":4558.79,"length":108,"time":253.266,"vocabulary":41,"volume":578.616,"operands":{"distinct":33,"total":65,"identifiers":["__stripped__"]},"operators":{"distinct":8,"total":43,"identifiers":["__stripped__"]}},"params":0,"sloc":{"logical":19,"physical":24},"errors":[],"lineEnd":34,"lineStart":11,"name":"<anonymous>"}],"methodAverage":{"cyclomatic":3,"cyclomaticDensity":15.789,"halstead":{"bugs":0.193,"difficulty":7.879,"effort":4558.79,"length":108,"time":253.266,"vocabulary":41,"volume":578.616,"operands":{"distinct":33,"total":65},"operators":{"distinct":8,"total":43}},"params":0,"sloc":{"logical":19,"physical":24}},"module":"src/upgrades/1.1.0/assign_topic_read_privilege.js"},"jshint":{"messages":[{"severity":"error","line":3,"column":1,"message":"Use the function form of \"use strict\".","source":"Use the function form of \"use strict\"."},{"severity":"error","line":5,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":6,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":11,"column":19,"message":"Expected '}' to match '{' from line 8 and instead saw 'function'.","source":"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'."},{"severity":"error","line":11,"column":28,"message":"Bad invocation.","source":"Bad invocation."},{"severity":"error","line":11,"column":30,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":12,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":13,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":15,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":15,"column":27,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":16,"column":24,"message":"'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":16,"column":14,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":17,"column":13,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":17,"column":13,"message":"'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":17,"column":44,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":19,"column":30,"message":"'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":19,"column":18,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":21,"column":21,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":21,"column":26,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":21,"column":42,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":22,"column":37,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":26,"column":29,"message":"'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":26,"column":18,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":28,"column":21,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":28,"column":26,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":28,"column":42,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":29,"column":37,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":32,"column":29,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":34,"column":6,"message":"Expected an identifier and instead saw ','.","source":"Expected an identifier and instead saw '{a}'."},{"severity":"error","line":34,"column":6,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":34,"column":7,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":34,"column":6,"message":"Unrecoverable syntax error. (97% scanned).","source":"Unrecoverable syntax error."}]}}