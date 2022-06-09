function modelReady()
{
    classifier.classify(gotResults);
}

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CCQJnXbci/model.json' , modelReady);
}

function gotResults()
{
    
}