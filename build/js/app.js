!function t(n,r,e){function o(i,s){if(!r[i]){if(!n[i]){var a="function"==typeof require&&require;if(!s&&a)return a(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var l=r[i]={exports:{}};n[i][0].call(l.exports,function(t){var r=n[i][1][t];return o(r||t)},l,l.exports,t,n,r,e)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<e.length;i++)o(e[i]);return o}({1:[function(t,n,r){function e(t){this.entry=t}e.prototype.countWords=function(){return this.entry.split(" ").length},e.prototype.countVowels=function(){for(var t=0,n="aeiouAEIOU",r=0;r<=this.entry.length-1;r++)-1!==n.indexOf(this.entry[r])&&t++;return t},e.prototype.countConsonants=function(){for(var t="bcdfghjklmnpqrstvxzwyBCDFGHJKLMNPQRSTVWXYZ",n=0,r=0;r<=this.entry.length-1;r++)-1!==t.indexOf(this.entry[r])&&n++;return n},e.prototype.getTeaser=function(){for(var t=this.entry.split(" "),n=[],r=0;r<8;r++)n.push(t[r]);return n.join(" ")},r.journalModule=e},{}],2:[function(t,n,r){var e=t("./../js/journal.js").journalModule;$(document).ready(function(){$("#journal-form").submit(function(t){t.preventDefault();var n=$("#journal").val(),r=new e(n),o=r.countWords(),u=r.countVowels(),i=r.countConsonants(),s=r.getTeaser();$("#display").text(o),$("#displayVowels").text(u),$("#displayConsonants").text(i),$("#displayTeaser").text(s)})})},{"./../js/journal.js":1}]},{},[2]);