AFRAME.registerComponent("cursor",{
   schema:{
    selectedItemId:{default:"",type:"string"}
   }, 
   inti:function(){
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
   },
   handleMouseEnterEvents:function(){
    this.el.addEventListener("mouseenter",()=>{
        const id = this.el.getAttribute("id");
    const posterId = ["superman", "spiderman", "captain-aero", "outer-space"];
    if (posterId.includes(id)) {
      const posterContainer = document.querySelector("#poster-container");
      posterContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#blue",
        opacity: 1,
      });
    }
    })
   },
  
})