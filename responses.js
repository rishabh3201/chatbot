function getBotResponse(input){
	if(input=="what is your name" || input=="who are you"){
		return "My name is Stark";
	}
	else if(input=="hello"|| input=="hi"|| input=="what's up" ||input=="hey"|| input=="whats up"){
		return "Hello! How can I help you?";
	}
	else if(input=="are you a robot" || input=="Are you a robot"){
		return "Yes, I am a robot";
	}
	else if(input=="who made you" || input=="Who made you" || input=="who is your boss"){
		return "I'm Rishabh's Assistant";
	}
	else if(input=="how can you help me" || input=="How can you help me"){
		return "I can solve your queries about AICTE";
	}
	else if(input=="Are you real" || input=="are you real"){
		return "I am a robot";
	}
	else if(input=="What is AICTE"|| input=="what is AICTE" || input=="AICTE"){
		return "AICTE stands for all India council for technical education.";
	}
	else if(input=="what are the objectives of AICTE" || input=="what are the objectives of AICTE"){
		return "Quality promotion in Technical education.";
	}
	else if(input=="what are the mission of AICTE"|| input=="What are the mission of AICTE"){
		return "Emphasis on developing high quality institutions, academic excellence and innovative research.";
	}
	else if(input=="what is smart india hackathon"|| input=="what is smart India hackathon"||input=="what is Smart India Hackathon"){
		return "It is an innovative product development competition.";
	}
	else if(input=="what is AICTE Yuvak Scheme" || input=="what is AICTE yuvak scheme"||input=="yuvak scheme"||input=="YUVAK scheme"||input=="YUVAK Scheme"){
		return "It stands for YOUTH UNDERTAKING VISIT FOR ACQUIRING KNOWLEDGE.";
	}
	else if(input=="what is meant by AICTE LILAVATI AWARD" || input=="what is meant by AICTE LILAVATI award"|| input=="what is meant by AICTE lilavati award"){
		return "This award is given to AICTE approved institutions, who have undertaken remarkable intervention for the cause and made an impact.";
	}
	else if(input=="why is smart india hackathon held every year"|| input=="why is Smart India Hackathon held every year"||input=="why is smart India hackathon held every year"){
		return "A unique initiative to identify new and disruptive digital solutions for solving the challenges faced by our country under the program of Smart India Hackathon 2017.";
	}
	else if(input=="what is PMSSS scheme J&K 2021-22" ||input=="What is PMSSS scheme J&K 2021-22" ||input=="what is PMSSS scheme J&K 2021 22"||input=="PMSSS scheme" ||input=="PMSSS scheme J&K"){
		return "The Prime Ministers Special Scholarship Scheme(PMSSS) is provided to J&K Students to pursue undergraduate studies outside the State of Jammu and Kashmir.";
	}
	else if(input=="what is AICTE Environment policy"||input=="what is AICTE environment policy"||input=="AICTE environment policy"){
		return "It includes environment conservation policy to create awareness about natural resources.";
	}
	else if(input=="where is the head office of AICTE located"||input=="where is the head office of AICTE"||input=="head office of AICTE" ){
		return "Head office of AICTE is located in New-Delhi.";
	}
	else if(input=="how to contact AICTE"||input=="contact of AICTE"||input=="phone number of AICTE"||input=="contact number of AICTE"||input=="phone number"){
		return "011-26131576-78";
	}
	else if(input=="which year was the Right to education act passed"||input=="which year was the right to education act passed"||input=="in which year right to education act passed"){
		return "The Right to Education Bill came into existence in August 2009.";
	}
	else if(input=="motive of AICTE KARMA policy"||input=="motive of AICTE KARMA policy"||input=="KARMA policy"||input=="karma policy"){
		return "Kaushal Augmentation and Restructuring Mission of AICTE” (KARMA)  is for all AICTE approved institutions in the country to overcome the dual challenge of scarcity of skilled manpower in jobs and low skill level of those who are presently in jobs.";
	}
	else{
		return "Sorry,I didn't recognise.";
	}
}