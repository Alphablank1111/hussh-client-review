const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./three-runtime-CzASU89I.js","./three.module-XgitSoYm.js"])))=>i.map(i=>d[i]);
import{ct as e,lt as t,t as n,ut as r}from"./index-CYvO2_Zr.js";var i=r(t(),1),a=e();function o({label:e,progress:t}){let r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let i=r.current;if(!i)return;let a=!1,o;async function s(){let[r]=await Promise.all([n(()=>import(`./three-runtime-CzASU89I.js`),__vite__mapDeps([0,1]),import.meta.url),document.fonts.load(`600 180px "DM Sans Variable"`)]);if(a||!i)return;let s=document.createElement(`canvas`),c=s.getContext(`webgl2`,{alpha:!0,antialias:!1});if(!c)return;let l=new r.WebGLRenderer({canvas:s,context:c,alpha:!0,powerPreference:`low-power`,antialias:!1});l.setPixelRatio(Math.min(window.devicePixelRatio,1.15)),l.setClearColor(0,0);let u=document.createElement(`canvas`);u.width=2048,u.height=1024;let d=u.getContext(`2d`);if(!d){l.dispose();return}d.font=`600 260px "DM Sans Variable"`,d.textAlign=`center`,d.textBaseline=`middle`,d.fillStyle=`#111310`,d.strokeStyle=`#111310`,d.lineWidth=2,d.fillText(e.toUpperCase(),1024,220,1950),d.strokeText(e.toUpperCase(),1024,770,1950);let f=new r.CanvasTexture(u);f.minFilter=r.LinearFilter,f.generateMipmaps=!1;let p=new r.Scene,m=new r.PerspectiveCamera(38,1,.1,20);m.position.z=4.5;let h=new r.PlaneGeometry(7.8,3.9,64,24),g={uMap:{value:f},uTime:{value:0},uScroll:{value:t.get()}},_=new r.ShaderMaterial({transparent:!0,depthWrite:!1,uniforms:g,vertexShader:`
          varying vec2 vUv;
          uniform float uTime;
          uniform float uScroll;
          void main() {
            vUv = uv;
            vec3 p = position;
            p.z += sin(p.x * 0.85 + uTime * 0.45 + uScroll * 2.0) * 0.34;
            p.y += sin(p.x * 0.9 + uTime * 0.3) * 0.15;
            p.x += sin(uScroll * 3.14) * 0.3;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,fragmentShader:`
          varying vec2 vUv;
          uniform sampler2D uMap;
          void main() {
            float alpha = texture2D(uMap, vUv).a;
            gl_FragColor = vec4(vec3(0.08, 0.09, 0.07), alpha * 0.16);
          }
        `}),v=new r.Mesh(h,_);p.add(v),s.setAttribute(`aria-hidden`,`true`),i.appendChild(s);let y=0,b=!0,x=e=>{g.uTime.value+=y?Math.min((e-y)/1e3,.08):.033,y=e,g.uScroll.value=t.get(),v.rotation.z=-.07+g.uScroll.value*.14,v.rotation.y=Math.sin(g.uTime.value*.23)*.08,l.render(p,m)},S=()=>{let e=Math.max(i.clientWidth,1),t=Math.max(i.clientHeight,1);l.setSize(e,t),m.aspect=e/t,m.position.z=e<700?6.8:4.5,m.updateProjectionMatrix(),l.render(p,m)},C=()=>{y=0,l.setAnimationLoop(b&&!document.hidden?x:null)},w=new ResizeObserver(S),T=new IntersectionObserver(e=>{b=e[0].isIntersecting,C()});w.observe(i),T.observe(i),document.addEventListener(`visibilitychange`,C);let E=e=>{e.preventDefault(),l.setAnimationLoop(null),delete i.dataset.ready};s.addEventListener(`webglcontextlost`,E),S(),x(performance.now()),i.dataset.ready=`true`,C(),o=()=>{l.setAnimationLoop(null),w.disconnect(),T.disconnect(),document.removeEventListener(`visibilitychange`,C),s.removeEventListener(`webglcontextlost`,E),h.dispose(),_.dispose(),f.dispose(),l.dispose(),s.remove(),delete i.dataset.ready}}return s().catch(()=>{}),()=>{a=!0,o?.()}},[e,t]),(0,a.jsx)(`div`,{ref:r,className:`product-type`,"aria-hidden":`true`,children:(0,a.jsxs)(`div`,{className:`product-type-fallback`,children:[e,(0,a.jsx)(`br`,{}),e]})})}export{o as default};