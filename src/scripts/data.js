import lessToJs from 'less-vars-to-js';
import fs from 'fs';

const paletteBraveGrumpy = fs.readFileSync('src/styles/themes/colors/bravegrumpy.less', 'utf-8');

const paletteSolarized = fs.readFileSync('src/styles/themes/colors/solarized.less', 'utf-8');

const bravegrumpy = lessToJs(paletteBraveGrumpy, {resolveVariables: true, stripPrefix: true});

const solarized = lessToJs(paletteSolarized, {resolveVariables: true, stripPrefix: true});

export const colors = {
    bravegrumpy: bravegrumpy,
    solarized: solarized
}

export const navigation = {
    width: "100%",
    backgroundColor: colors.bravegrumpy.brand1,
    darkBackgroundColor: colors.bravegrumpy.accent1a,
    justifyContent: "flex-start",
    routes: [
        {
            href:"/", 
            text:"home", 
            className: "default",
        },
        {
            href:"/about", 
            text:"about", 
            className: "default"
        },
        {
            href:"/blog", 
            text:"blog", 
            className: "default"
        },
        {
            href:"/headers", 
            text:"headers", 
            className: "default"
        },
        {
            href:"/components", 
            text:"components", 
            className: "default"
        },
        {
            href:"/tags", 
            text:"tags", 
            className: "default"
        },
    ],
}