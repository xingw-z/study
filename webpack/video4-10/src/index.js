import _ from 'lodash';
import $ from 'jquery';

let a = $('<div></div>');
a.html(_.join(['寂寞围绕着电视', '垂死坚持', '在两点半消失', 'a a a '], ' '));
$('body').append(a);