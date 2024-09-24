---
layout: splash
title: Image Based English and Persian Text Recognition using RCNN
permalink: /projects/text-recognition/
author_profile: false
---

# Image Based English and Persian Text Recognition using RCNN
---


<html>
<style>
    html,
    body {
        width: 100%;
    }
    img.two {
        height: 80%;
        width: 80%;
    }
    * {
        box-sizing: border-box;
    }
    .column {
        float: left;
        width: 50%;
        padding: 5px;
    }
    .row::after {
        content: "";
        clear: both;
        display: table;
    }
</style>
</html>



## Introduction

This project is a practical implementation of an article called [An End-to-End Trainable Neural Network for Image-Based Sequence Recognition and Its Application to Scene Text Recognition](https://arxiv.org/abs/1507.05717). The proposed algorithm is first tested on English string database and later to prove its generality, the authors train the model on musical notes. This gave me an idea to first, replicate the results on English text and later test it on persian text since it's my mother tongue.


Researchers often use a combination of Convolutional Neural Network (CNN) and Recurrent Neural Network (RNN) models. Convolutional neural networks, in the past, have performed very well in detection tasks in the realm of machine vision. And respectively, Recurrent neural networks have also performed very well in sequence recognition tasks. So it can be assumed that a mixture of these two should work better in recognizing a sequence of characters in a row (RNN's task) from an image (CNN's task).



The model proposed by the mentioned article is comprised of four sets of layers; The first is the input layer which is just 32 pixel high grayscale image of a text. Next, the CNN layers which are inspired by the famous VGG model. Followed by that, there are the two bi-directional LSTM layers as for the recurrent layer set. And lastly, the transcription layer. The transcription layer is tasked with transforming the predictions made by the LSTM layer to sequence of letters. 


<html>
<body>
    <center>
        <img src='/files/text-recognition/layers.png'>
    </center>
</body>
</html>



## Databases 

### English 

One of the largest databases used in the original article is called MJSynth. This database is comprised of 9 million synthetically made images using multiple different fonts and then different random distortion techniques were applied to make the images more realistic.

Since my resources (my laptop's GPU) were limited I had to limit myself to use only about 20% of the data (~2million).

<html>
<body>
    <center>
        <img src='/files/text-recognition/english-samples.png'>
    </center>
</body>
</html>


### Persian

There were no public database for images of persian texts. So I took matters to my own hand. I downloaded two dictionaries of persian word with a total of 700k words and I synthetically generated my own image database with the same apparoach as MJSynth using them. I used 35 different fonts, randomally selected the color of the background and the foreground, added rotation, added distortion and added a gaussian noise.


The results are shown in the image below. As you can see the variety and the randomness is not as great same as MJSynth. This was a shortcoming of mine and will come important later!


<html>
<body>
    <center>
        <img src='/files/text-recognition/persian-samples.png'>
    </center>
</body>
</html>


## Results

### English 

After 8 Epochs, the Sequence Accuracy of Train, Validation and Test datasets were 91%, 86% and 86% respectively. Compared to the original article result of 92.3% for the test dataset, my implementation has preformed worse by 6%. This could be explained by me only using 2 million images for training my model as oppose to the entire 9 million and also training for a shorter time than the original article.


<html>
<body>
    <center>
        <div class="row">
            <div class="column">
                <img src='/files/text-recognition/english-acc.png'>
            </div>
            <div class="column">
                <img src='/files/text-recognition/english-loss.png'>
            </div>
        </div>
        <br>
        <br>
    </center>

</body>

</html>

### Persian

After 10 Epochs, the Sequence Accuracy of Train, Validation and Test datasets were 99.72%, 96.64% and 96.61% respectively.

<html>
<body>
    <center>
        <div class="row">
            <div class="column">
                <img src='/files/text-recognition/persian-acc.png'>
            </div>
            <div class="column">
                <img src='/files/text-recognition/persian-loss.png'>
            </div>
        </div>
        <br>
        <br>
    </center>

</body>

</html>


Now how could the English model with x3 data of the Persian model perform so much worse? Even though persian letters are arguably more complex than latin ones and have more variation depending how they connect to their neighboring letters.


The answer lies in the quality of the database. As mentioned before, the variety in colors, fonts and randomness of the MJSynth is greater and is more close what you might find in the real world therefore it requires more training data to acheive a high accuracy. My Persian Database on the other hand, lacks this diversity so it was easier for the model to pick up patterns and get a really high accuracy.
