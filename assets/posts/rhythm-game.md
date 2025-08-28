# The Great Mouse Performance

Concept: We are inverting the usual rhythm game expectations. Instead of hitting notes, you try to dodge them 

You play as a mouse to the tune of classical music. 

## MIDI Parsing
As discussed with my team, our game needed to be able to parse a midi file in order to generate notes in the right order.

In short time, I was tasked with researching how to build a midi parser.  After a lot of tutorial watching and forum reading, I discovered the Unity Asset, [DryWetMIDI](https://github.com/melanchall/drywetmidi) by melanchall (on github). This tool was a life-saver. 

## Player Health
I also built the game's health system. 

- I created the health icons that matched the game's classical music aesthetic
    - hearts in the shape of the bass clef. [Image]()
- Defined the collisions
- Scripted damage behavior 
    - White flashing on collision
    - Red hearts turn black
    - Edited squeak SFXs 

## Result
[Video iphone](/assets/visual-media/greatmouse-health.mov)

<ul>

Play [The Great Mouse Performance](https://frndlydragon.itch.io/the-great-mouse-performance)

<!-- custom back button image? -->
Return to [portfolio site](symsoph.github.io)
</ul>