# Bumped Terrain

##Creating a terrain with a bump map.

My research project into how to create a terrain with a bump map. I had a project that had
 a cracked, broken road that looks particularly flat when building
 
![Image of Flat Terrain]
(https://github.com/JoWylie2/VM364_02/blob/master/Reasearch_Proj/Img/FlatTerrain_01.png)
 ![Image of Flat Terrain]
(https://github.com/JoWylie2/VM364_02/blob/master/Reasearch_Proj/Img/FlatTerrain_02.png)

 This was the image I was using on this terrain, as a diffuse material as a texture brush.
 It was an image of cracked dirt, offset in the usual way to tile it, and then with the road 
 lines painted on with photoshop. Very simple.
 
![Image of Road Tile]
(https://github.com/JoWylie2/VM364_02/blob/master/Reasearch_Proj/Img/Road_Tile.png)
![Image of Road tile bump]
(https://github.com/JoWylie2/VM364_02/blob/master/Reasearch_Proj/Img/Road_Bump.png)

I had to create a bump map for the tile. I created the bump map using the already grayscale 
cracked road texture. 

Once you import the tiles into Unity, in the import settings dialoge, select "Alpha from Grayscale".

![Image of the Import Settings Dialogue]
(https://github.com/JoWylie2/VM364_02/blob/master/Reasearch_Proj/Img/Import_settings.png)

However, saving this image separately and putting it into unity has no
effect at this point.

You first have to create a new material. Make this material a Nature>Terrain>Bumped Specular material.
For now, leave the specular color and shininess at their automatic settings. You can edit this later
to your desire.

![Image of how to create the new material]
(https://github.com/JoWylie2/VM364_02/blob/master/Reasearch_Proj/Img/New_Mat.png)

In your terrain settings, place your new bumped material into the "Material" option.

![Image of where to assign the material to the terrain]
(https://github.com/JoWylie2/VM364_02/blob/master/Reasearch_Proj/Img/Assign_mat.png)

Paint your terrain! The terrain should now be bumped, reacting to your light source and the player movement.

![Image of Bumped Terrain]
(https://github.com/JoWylie2/VM364_02/blob/master/Reasearch_Proj/Img/BumpedTerrain_01.png)
![Image of Bumped Terrain]
(https://github.com/JoWylie2/VM364_02/blob/master/Reasearch_Proj/Img/BumpedTerrain_02.png)
