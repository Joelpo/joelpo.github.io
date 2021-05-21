(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[918],{6995:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Z}});var n=a(7294),l=a(6742),i=a(4973);var r=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=a(2263),o=a(907),d=a(6700);function c(e){var t=e.siteTitle,a=e.versionLabel;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("strong",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){var t=e.siteTitle,a=e.versionLabel;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("strong",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function u(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:n.createElement("strong",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var v=function(){var e=(0,s.default)().siteConfig.title,t=(0,o.useActivePlugin)({failfast:!0}).pluginId,a=(0,d.J)(t).savePreferredVersionName,l=(0,o.useActiveVersion)(t),i=(0,o.useDocVersionSuggestions)(t),r=i.latestDocSuggestion,v=i.latestVersionSuggestion;if(!v)return n.createElement(n.Fragment,null);var p,g=null!=r?r:(p=v).docs.find((function(e){return e.id===p.mainDocId}));return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,"current"===l.name?n.createElement(c,{siteTitle:e,versionLabel:l.label}):n.createElement(m,{siteTitle:e,versionLabel:l.label})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:v.label,to:g.path,onClick:function(){return a(v.name)}})))},p=a(1217),g="lastUpdatedDate_1WI_";function h(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:g},a)}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("strong",null,t)}}," by {user}")}function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("div",{className:"col text--right"},n.createElement("em",null,n.createElement("small",null,n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)))}var f=a(571),_=a(2122),N=a(9756),L=a(6010),U="iconEdit_2_ui",T=function(e){var t=e.className,a=(0,N.Z)(e,["className"]);return n.createElement("svg",(0,_.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,L.Z)(U,t),"aria-label":"Edit page"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function w(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(T,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var k="docTitle_3a4h",y="docItemContainer_33ec",A="docItemCol_3FnS";var Z=function(e){var t,a=e.content,l=a.metadata,i=a.frontMatter,s=i.image,d=i.keywords,c=i.hide_title,m=i.hide_table_of_contents,u=l.description,g=l.title,h=l.editUrl,E=l.lastUpdatedAt,_=l.formattedLastUpdatedAt,N=l.lastUpdatedBy,U=(0,o.useActivePlugin)({failfast:!0}).pluginId,T=(0,o.useVersions)(U),Z=(0,o.useActiveVersion)(U),V=T.length>1,x=i.title||g;return n.createElement(n.Fragment,null,n.createElement(p.Z,{title:x,description:u,keywords:d,image:s}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,L.Z)("col",(t={},t[A]=!m,t))},n.createElement(v,null),n.createElement("div",{className:y},n.createElement("article",null,V&&n.createElement("div",null,n.createElement("span",{className:"badge badge--secondary"},"Version: ",Z.label)),!c&&n.createElement("header",null,n.createElement("h1",{className:k},g)),n.createElement("div",{className:"markdown"},n.createElement(a,null))),(h||E||N)&&n.createElement("div",{className:"margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},h&&n.createElement(w,{editUrl:h})),(E||N)&&n.createElement(b,{lastUpdatedAt:E,formattedLastUpdatedAt:_,lastUpdatedBy:N}))),n.createElement("div",{className:"margin-vert--lg"},n.createElement(r,{metadata:l})))),!m&&a.toc&&n.createElement("div",{className:"col col--3"},n.createElement(f.Z,{toc:a.toc}))))}}}]);