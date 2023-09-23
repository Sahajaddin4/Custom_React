   //     BASIC DOM MANUPULATION--------------//
// const root=document.querySelector('#root');
// const p=document.createElement('p');
// p.innerHTML="Hi hello";
// root.appendChild(p);


//CREATE YOUR OWN CUSTOM REACT . HOW JSX WORKS INTERNALLY---//

const root=document.getElementById('root');


function customRender(reactElement)
{
   const element=document.createElement(reactElement.type);
   element.innerHTML=reactElement.text;
   for (const prop in reactElement.props) {
    if(prop==="children" || prop==="text") continue;

        element.setAttribute(prop,reactElement.props[prop]);
    }

    root.append(element);
   }



const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    },
     text:'Click here to visit'
}
customRender(reactElement);



//IN JSX YOU CAN SIMPLY WRITE   
//bundler like babel  is used to convert jsx to html ,css,and js format 
/*  function react()
{
     return(<>
         <a href="https://www.google.com/" target="_blank">Click here to  visti </a>
        </>
        )
}*/