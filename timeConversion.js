module.exports = {
    timeConversion: function(s){
        if(s.indexOf(':') == -1){
            throw new Error('Format time wrong! Format time is hh:mm:ssAM​  or hh:mm:ssPM​');
            return false;
        }

        var splitTime = s.toLowerCase().split(':');
        var hours = parseInt(splitTime[0]);
        var minutes = parseInt(splitTime[1]);
        var ampm = splitTime[splitTime.length - 1];

        if(hours > 12 || hours < 1){
            throw new Error('Format time in hours wrong! Hours must be not higher than 12 and not smaller than 1');
            return false;
        }
        if(minutes > 59 || parseInt(ampm) > 59 || minutes < 0 || parseInt(ampm) < 0){
            throw new Error('Format time in minutes or second wrong! Minutes or second must be not higher than 59 and not smaller than 0');
            return false;
        }
        if(splitTime.length != '3' || (ampm.indexOf('am') == -1 && ampm.indexOf('pm') == -1)){
            throw new Error('Format time wrong! Format time is hh:mm:ssAM​  or hh:mm:ssPM​.');
            return false;
        }

        if(ampm.indexOf('am') != -1 && hours == 12){
            splitTime[0] = '00';
        }
        if(ampm.indexOf('pm') != -1 && hours < 12){
            splitTime[0] = hours+12;
        }
        
        return splitTime.join(':').replace(/(am|pm)/, '');
    }
}
