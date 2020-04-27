// import { AboutTemplate } from "../templates/about-template.html";



const About = {
	template: `<h1 @click="guamara()"><button>About Func</button></h1>`,
	methods:{
		guamara(){
			console.log("gua gua from about");
		}
	}
}


export { About }

