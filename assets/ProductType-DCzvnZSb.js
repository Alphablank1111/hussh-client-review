const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./three-runtime-OUrVMg6F.js","./three.module-DM48eX90.js"])))=>i.map(i=>d[i]);
import{a as e,i as t,n,r}from"./index-CK2STR8_.js";var i=e(t(),1),a=r();function o({label:e,progress:t}){let r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let i=r.current;if(!i)return;let a=!1,o;async function s(){let[r]=await Promise.all([n(()=>import(`./three-runtime-OUrVMg6F.js`),__vite__mapDeps([0,1]),import.meta.url),document.fonts.load(`600 180px "DM Sans Variable"`)]);if(a||!i)return;let s=document.createElement(`canvas`),c=s.getContext(`webgl2`,{alpha:!0,antialias:!1});if(!c)return;let l=new r.WebGLRenderer({canvas:s,context:c,alpha:!0,powerPreference:`low-power`,antialias:!1});l.setPixelRatio(Math.min(window.devicePixelRatio,1.15)),l.setClearColor(0,0);let u=document.createElement(`canvas`);u.width=2048,u.height=1024;let d=u.getContext(`2d`);if(!d){l.dispose();return}d.font=`600 260px "DM Sans Variable"`,d.textAlign=`center`,d.textBaseline=`middle`,d.fillStyle=`#111310`,d.fillText(e.toUpperCase(),1024,220,1950);let f=document.createElement(`canvas`);f.width=2048,f.height=512;let p=f.getContext(`2d`);p.font=d.font,p.textAlign=`center`,p.textBaseline=`middle`,p.strokeStyle=`#111310`,p.fillStyle=`#111310`,p.lineWidth=4,p.strokeText(e.toUpperCase(),1024,258,1950),p.globalCompositeOperation=`destination-out`,p.fillText(e.toUpperCase(),1024,258,1950),d.drawImage(f,0,512);let m=new r.CanvasTexture(u);m.minFilter=r.LinearFilter,m.generateMipmaps=!1;let h=new r.Scene,g=new r.PerspectiveCamera(38,1,.1,20);g.position.z=4.5;let _=new r.PlaneGeometry(7.8,3.9,64,24),v={uMap:{value:m},uTime:{value:0},uScroll:{value:t.get()}},y=new r.ShaderMaterial({transparent:!0,depthWrite:!1,uniforms:v,vertexShader:`
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
        `}),b=new r.Mesh(_,y);h.add(b),s.setAttribute(`aria-hidden`,`true`),i.appendChild(s);let x=0,S=!0,C=e=>{v.uTime.value+=x?Math.min((e-x)/1e3,.08):.033,x=e,v.uScroll.value=t.get(),b.rotation.z=-.07+v.uScroll.value*.14,b.rotation.y=Math.sin(v.uTime.value*.23)*.08,l.render(h,g)},w=()=>{let e=Math.max(i.clientWidth,1),t=Math.max(i.clientHeight,1);l.setSize(e,t),g.aspect=e/t,g.position.z=e<700?6.8:4.5,g.updateProjectionMatrix(),l.render(h,g)},T=()=>{x=0,l.setAnimationLoop(S&&!document.hidden?C:null)},E=new ResizeObserver(w),D=new IntersectionObserver(e=>{S=e[0].isIntersecting,T()});E.observe(i),D.observe(i),document.addEventListener(`visibilitychange`,T);let O=e=>{e.preventDefault(),l.setAnimationLoop(null),delete i.dataset.ready};s.addEventListener(`webglcontextlost`,O),w(),C(performance.now()),i.dataset.ready=`true`,T(),o=()=>{l.setAnimationLoop(null),E.disconnect(),D.disconnect(),document.removeEventListener(`visibilitychange`,T),s.removeEventListener(`webglcontextlost`,O),_.dispose(),y.dispose(),m.dispose(),l.dispose(),s.remove(),delete i.dataset.ready}}return s().catch(()=>{}),()=>{a=!0,o?.()}},[e,t]),(0,a.jsx)(`div`,{ref:r,className:`product-type`,"aria-hidden":`true`,children:(0,a.jsxs)(`div`,{className:`product-type-fallback`,children:[e,(0,a.jsx)(`br`,{}),e]})})}export{o as default};