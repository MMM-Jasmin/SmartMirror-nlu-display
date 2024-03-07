/**
 * @file smartmirror-speechrecongnition.js
 *
 * @author nkucza
 * @license MIT
 *
 * @see  https://github.com/NKucza/smartmirror-speechrecognition
 */


Module.register('SmartMirror-nlu-display', {

    nlu_json : "test 1",
  
    defaults: {
        debug : true
    },

    /**
     * @function start
     * @description Sets mode to initialising.
     * @override
     */
    start() {
        Log.info(`Starting module: ${this.name}`);
        Log.info(`${this.name} is waiting for voice command registrations.`);
		//this.sendSocketNotification('SPEECH_REC_START', this.config);
		this.nlu_json = "test 2";
		//this.debugInformation_ger = "";
    },

    /**
     * @function getStyles
     * @description Style dependencies for this module.
     * @override
     *
     * @returns {string[]} List of the style dependency filepaths.
     */
    //getStyles() {
    //    return ['font-awesome.css', 'SmartMirror-Speechrecognition-DeepSpeech.css'];
    //},

    /**
     * @function getDom
     * @description Creates the UI as DOM for displaying in MagicMirror application.
     * @override
     *
     * @returns {Element}
     */
    getDom() {
        const wrapper = document.createElement('div');
        const voice = document.createElement('div');
        voice.classList.add('small', 'align-right');


        //const icon = document.createElement('i');
		//if(this.aktive == true){
       	//	icon.classList.add('fa', 'fa-microphone', 'icon');
        //	icon.classList.add('pulse');
		//} else {
		//	icon.classList.add('fa', 'fa-microphone-slash', 'icon');
		//}

        //voice.appendChild(icon);

        //const modeSpan = document.createElement('span');
        //modeSpan.innerHTML = "  Speech recognition results";
        //voice.appendChild(modeSpan);

        const nlu_element = document.createElement('div');
        nlu_element.innerHTML = this.nlu_json;
        voice.appendChild(nlu_element);

        wrapper.appendChild(voice);

        return wrapper;
    },

	notificationReceived: function(notification, payload, sender) {

        if (notification === "/speech/nlu") {

            Log.info(notification)
            Log.info(typeof(payload))
            
			this.nlu_json = payload;
            this.updateDom(10);
		} 
	}
});