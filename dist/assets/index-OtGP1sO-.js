(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();var i=0,l=0,u=!1,f=["whoami "],d=600,p=1e3;function c(s,t){var n=$("#"+s),o=t[l],e=n.children("h1");i<o.length&&(o.charAt(i)=="|"?(u=!0,e.removeClass("cursor"),eParagraph.addClass("cursor"),i++,setTimeout(function(){c(s,t)},p)):(u?eParagraph.text(eParagraph.text()+o.charAt(i)):e.text(e.text()+o.charAt(i)),i++,setTimeout(function(){c(s,t)},d)))}window.onload=c("output",f);
