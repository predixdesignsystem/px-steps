const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="px-steps-styles">
<template>
<style>
@charset "UTF-8";/*! normalize.css v3.0.2 | MIT License | git.io/normalize */.container .step-wrapper,.container .step-wrapper .step-item{min-width:var(--px-steps-min-width,5rem)}.container .step-wrapper.current .step-icon,.container .step-wrapper.error px-icon{stroke-width:2}html{background-color:var(--px-base-background-color,#fff);font-size:15px;overflow-y:scroll;min-height:100%}:host,html{color:var(--px-base-text-color,#2c404c);line-height:1.33333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}body,figure{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}address,blockquote,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,ol,p,pre,table,ul{margin-bottom:1rem}li>ol,li>ul{margin-bottom:0}dd,ol,ul{margin-left:2rem}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}pre{overflow:auto}.flex{display:-webkit-flex;display:-ms-flexbox;display:flex}.inline--flex{display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.flex--row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex--row--rev{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.flex--col{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.flex--col--rev{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.flex--nowrap{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.flex--wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.flex--wrap--rev{-webkit-flex-wrap:wrap-reverse;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.flex--left{-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.flex--center{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.flex--right{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.flex--justify{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.flex--spaced{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.flex--top{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.flex--middle{-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex--bottom{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.flex--stretch{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.flex--baseline{-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline}.flex--top--multi{-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.flex--middle--multi{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center}.flex--bottom--multi{-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.flex--stretch--multi{-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch}.flex--justify--multi{-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between}.flex--spaced--multi{-webkit-align-content:space-around;-ms-flex-line-pack:distribute;align-content:space-around}.flex__item{-webkit-flex:1;-ms-flex:1;flex:1}.flex__item--msfix{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.flex__item--top{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.flex__item--middle{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.flex__item--bottom{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}.flex__item--baseline{-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline}:host{display:block}.container .step-wrapper{position:relative;width:100%;text-align:center;color:var(--px-steps-text-color,#000);cursor:pointer;word-break:break-word}.container .step-wrapper .step-connector{position:absolute;height:1px;width:calc(100% - 22px);margin-left:.73333rem;top:.73333rem;left:-50%;background-color:var(--px-steps-connector-color,#000)}.container .step-wrapper .step-label{padding-top:.33333rem}.container .step-wrapper.current{color:var(--px-steps-text-color--current,#00f);font-weight:700}.container .step-wrapper.complete{color:var(--px-steps-text-color--completed,#a9a9a9)}.container .step-wrapper.error,.container .step-wrapper.error px-icon{color:var(--px-steps-text-color--error,red)}.container .step-wrapper :hover{color:var(--px-steps-text-color--hover,#00f)}.container .step-wrapper :active{color:var(--px-steps-text-color--pressed,#00f)}.container .step-wrapper:first-of-type .step-connector{display:none}
</style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;