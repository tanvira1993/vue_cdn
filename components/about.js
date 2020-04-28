import  about  from "../templates/about-template.js";


const About = {
	template: about,
	mounted(){
		this.guamara();
	},
	methods:{
		guamara(){
			console.log("gua gua from about");
		},
		gua(){
			console.log('hello gua function')
		}
	},
	
}


export { About }

