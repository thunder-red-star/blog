const fs = require('fs');
// get the contents within the <pm> tag, split it, and assign the values to the object
function postMetaData (data) {
    var meta = data.split('</pm>')[0].replace("<pm>", "").split('\n');
    var metadata = {
        title: meta[0],
        description: meta[1],
        author: meta[2],
        date: meta[3]
    }
    return metadata;
}

// get the contents within the <pc> tag and return it
function postContent (data) {
    console.log(data)
    var content = data.split('<pc>')[1].replace("</pc>", "");
    return content;
}

function postData (data) {
    contents = fs.readFileSync(data, {encoding: 'utf8'});
    var metadata = postMetaData(contents);
    var content = postContent(contents);
    return {
        meta: metadata,
        content: content
    }
}

module.exports = postData;