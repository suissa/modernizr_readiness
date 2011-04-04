// JavaScript Document
test('CSS Tests', function() {
    ok(Modernizr.fontface, '@font-face');
    ok(Modernizr.rgba, 'rgba()');
    ok(Modernizr.hsla, 'hsla()');
    ok(Modernizr.borderimage, 'border-image');
    ok(Modernizr.borderradius, 'border-radius');
    ok(Modernizr.boxshadow, 'box-shadow');
    ok(Modernizr.textshadow, 'text-shadow');
    ok(Modernizr.multiplebgs, 'Multiple Backgrounds');
    ok(Modernizr.backgroundsize, 'background-size');
    ok(Modernizr.opacity, 'Opacity');
    ok(Modernizr.cssanimations, 'CSS Animations');
    ok(Modernizr.csscolumns, 'CSS Columns');
    ok(Modernizr.cssgradients, 'CSS Gradients');
    ok(Modernizr.cssreflections, 'CSS Reflections');
    ok(Modernizr.csstransforms, 'CSS 2D Transforms');
    ok(Modernizr.csstransforms3d, 'CSS 3D Transforms');
    ok(Modernizr.csstransitions, 'CSS Transitions');
    ok(Modernizr.flexbox, 'Flexible Box Model');
});

test('HTML5 Input Types', function() {
    ok(Modernizr.inputtypes.search, 'Input: search'); 
    ok(Modernizr.inputtypes.tel, 'Input: tel'); 
    ok(Modernizr.inputtypes.url, 'Input: url'); 
    ok(Modernizr.inputtypes.email, 'Input: email'); 
    ok(Modernizr.inputtypes.datetime, 'Input: datetime'); 
    ok(Modernizr.inputtypes.date, 'Input: date'); 
    ok(Modernizr.inputtypes.month, 'Input: month'); 
    ok(Modernizr.inputtypes.week, 'Input: week'); 
    ok(Modernizr.inputtypes.time, 'Input: time'); 
    ok(Modernizr.inputtypes['datetime-local'], 'Input: datetime-local'); 
    ok(Modernizr.inputtypes.number, 'Input: number'); 
    ok(Modernizr.inputtypes.range, 'Input: range'); 
    ok(Modernizr.inputtypes.color, 'Input: color'); 
});

test('HTML5 Input Attributes', function() {
    ok(Modernizr.input.autocomplete, 'Input Attr: autocomplete'); 
    ok(Modernizr.input.autofocus, 'Input Attr: autofocus'); 
    ok(Modernizr.input.list, 'Input Attr: list'); 
    ok(Modernizr.input.placeholder, 'Input Attr: placeholder'); 
    ok(Modernizr.input.max, 'Input Attr: max'); 
    ok(Modernizr.input.min, 'Input Attr: min'); 
    ok(Modernizr.input.multiple, 'Input Attr: multiple'); 
    ok(Modernizr.input.pattern, 'Input Attr: pattern'); 
    ok(Modernizr.input.required, 'Input Attr: required'); 
    ok(Modernizr.input.step, 'Input Attr: step'); 
});


test('HTML5 APIs', function() {
    ok(Modernizr.canvas, 'Canvas'); 
    ok(Modernizr.canvastext, 'Canvas Text');
    ok(Modernizr.webgl, 'Web GL');
    ok(Modernizr.geolocation, 'Geolocation API');
    
    ok(Modernizr.localstorage, 'localStorage');
    ok(Modernizr.sessionstorage, 'sessionStorage');
    
    ok(Modernizr.webworkers, 'Web Workers');
    ok(Modernizr.applicationcache, 'applicationCache');
    ok(Modernizr.websqldatabase, 'Web SQL Database');
    ok(Modernizr.indexeddb, 'IndexedDB');
    ok(Modernizr.websockets, 'Web Sockets');
    
    ok(Modernizr.hashchange, 'Hashchange Event - location.hash');
    ok(Modernizr.history, 'History Management - window.history and history.pushState');
    ok(Modernizr.draganddrop, 'Drag and Drop');
    ok(Modernizr.postmessage, 'Cross-window Messaging');
    ok(Modernizr.touch, 'Touch');
});

test('HTML5 Media (Audio)', function () {
    ok(Modernizr.audio, 'HTML5 Audio');
    ok(Modernizr.audio.ogg, 'HTML5 Audio - ogg format');
    ok(Modernizr.audio.wav, 'HTML5 Audio - wav format');
    ok(Modernizr.audio.mp3, 'HTML5 Audio - mp3 format');
    ok(Modernizr.audio.m4a, 'HTML5 Audio - m4a format');
});

test('HTML5 Media (Video)', function () {
    ok(Modernizr.video, 'HTML5 Video');
    ok(Modernizr.video.ogg, 'HTML5 Video - ogg format');
    ok(Modernizr.video.webm, 'HTML5 Video- webm format');
    ok(Modernizr.video.h264, 'HTML5 Video- h264 format');
});

test('SVG', function () {
    ok(Modernizr.svg, 'SVG');
    ok(Modernizr.inlinesvg, 'Inline SVG');
    ok(Modernizr.svgclippaths, 'SVG Clip Paths');
    ok(Modernizr.smil, 'SMIL (declarative animation used along with SVG)');
});
