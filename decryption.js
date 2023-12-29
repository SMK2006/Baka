const commands = String.raw`eYe_F0unD@tion_USER_IM@S/:~ cd HAX
eYe_F0unD@tion_USER_IM@S/HAX/:~ GENERATING DECRYPTION KEY`;

const beep = String.raw`


██████╗░███████╗░█████╗░██████╗░██╗░░░██╗██████╗░████████╗██╗░█████╗░███╗░░██╗  ██╗░░██╗███████╗██╗░░░██╗
██╔══██╗██╔════╝██╔══██╗██╔══██╗╚██╗░██╔╝██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║  ██║░██╔╝██╔════╝╚██╗░██╔╝
██║░░██║█████╗░░██║░░╚═╝██████╔╝░╚████╔╝░██████╔╝░░░██║░░░██║██║░░██║██╔██╗██║  █████═╝░█████╗░░░╚████╔╝░
██║░░██║██╔══╝░░██║░░██╗██╔══██╗░░╚██╔╝░░██╔═══╝░░░░██║░░░██║██║░░██║██║╚████║  ██╔═██╗░██╔══╝░░░░╚██╔╝░░
██████╔╝███████╗╚█████╔╝██║░░██║░░░██║░░░██║░░░░░░░░██║░░░██║╚█████╔╝██║░╚███║  ██║░╚██╗███████╗░░░██║░░░
╚═════╝░╚══════╝░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝  ╚═╝░░╚═╝╚══════╝░░░╚═╝░░░


███████╗███████╗░█████╗░███████╗
██╔════╝╚════██║██╔══██╗╚════██║
██████╗░░░░░██╔╝╚██████║░░░░██╔╝
╚════██╗░░░██╔╝░░╚═══██║░░░██╔╝░
██████╔╝░░██╔╝░░░█████╔╝░░██╔╝░░
╚═════╝░░░╚═╝░░░░╚════╝░░░╚═╝░░░
`;

const samurai = String.raw`

 
░░░░░░░░░░░░░░░░██╗██╗░░██╗██╗░░░██╗██████╗░
░░░░░░░░░░░░░░░██╔╝██║░░██║██║░░░██║██╔══██╗
░░░░░░░░░░░░░░██╔╝░███████║██║░░░██║██████╦╝
░░░░░░░░░░░░░██╔╝░░██╔══██║██║░░░██║██╔══██╗
██╗██╗██╗██╗██╔╝░░░██║░░██║╚██████╔╝██████╦╝
╚═╝╚═╝╚═╝╚═╝╚═╝░░░░╚═╝░░╚═╝░╚═════╝░╚═════╝░
`;

let blink = document.querySelector('.blink');
const code = document.querySelector('.code');

const RandomNumber = (min, max) => {
	return Math.floor(Math.random() * max) + min
};

const Delay = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
};

const ResetTerminal = () => {
	code.innerHTML = '<span class="blink">█</span>';
	blink = document.querySelector('.blink');
};

const RenderString = characters => {
	blink.insertAdjacentHTML('beforeBegin', characters);
};

const TypeString = async characters => {
	for(const character of characters.split('')) {
		await Delay(RandomNumber(100, 200));
		RenderString(character);
	}
}

const DrawLines = async ( characters, min = 50, max = 500 ) => {
	for(const line of characters.split('\n')) {
		await Delay(RandomNumber(min, max));
		RenderString(`${line}\n`);
	}
}

const DrawCommands = async commands => {
	for( const line of commands.split('\n')){
		// Seperate the directory and the command
		const [currentDir, command] = line.split(':~ ');

		// Print the directory, type the command and finish with new line
		RenderString(`${currentDir}:~ `);
		await TypeString(command);
		RenderString('\n');
	}
}


// Start the code
(async()=> {
	await DrawCommands("/:~ ssh User_IM@S_HACKING^PROCESS... * Accesing_KEY: ATAUL");
	await Delay(1000);
	RenderString("ACCESING KEY STATUS: APPROVED");
	await Delay(500);
	RenderString("\n");
	await DrawCommands(commands);
	RenderString('\nPROCESS...    100%\n\n');
	await DrawCommands('eYe_F0unD@tion_USER_IM@S/HAX:~ ');
	await DrawLines( beep );
	await TypeString("\n\nFucking told you, we did it partner! Now I can get into the Eye Foundations mainframe! Let's see what is on it and find out what all this is about");
    await TypeString("\n\n I'm almost finished with my hub! I will send you the link, Once im done looking around the main database i'll contact you as fast as possible! You will get the link any minuten now... Good luck!")
	await Delay(3000);
	ResetTerminal();
	await DrawLines(samurai);
   
})();

