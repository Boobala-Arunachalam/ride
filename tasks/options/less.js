module.exports = {
  "compile": {
    options: {
      paths: ["app/styles"],
      compress: true,
      yuicompress: true,
      syncImport: true
      // dumpLineNumbers: true TODO   
    },
    files: {
      'tmp/styles/app/ride.css': 'app/styles/ride.less'
    }
  }
  
};
