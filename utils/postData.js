
// get the contents within the <pm> tag, split it, and assign the values to the object
function postMetaData (data) {
    var meta = data.split('</pm>')[0].replace("<pm>", "").split('\n');
    var metaData = {
        title: meta[0],
        author: meta[1],
        date: meta[2]
    }
    return metaData;
}

// get the contents within the <pc> tag and return it
function postContent (data) {
    var content = data.split('</pc>')[0].replace("<pc>", "");
    return content;
}

function postData (data) {
    var metaData = postMetaData(data);
    var content = postContent(data);
    return {
        meta: metaData,
        content: content
    }
}

module.exports = postData;