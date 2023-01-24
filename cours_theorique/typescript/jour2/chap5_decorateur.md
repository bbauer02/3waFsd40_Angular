# Introduction à la notion de décorateurs

## Le fichier `tsconfig.json`

Nous allons tout d’abord faire un peu de configuration. Créez un dossier chap5. Créez un fichier
tsconfig.json, le dossier App et dist puis définissez les paramètres suivants dans le fichier tsconfig.json :

```json
{
  "compilerOptions": {
    "outDir": "./dist", // dossier de compilation
    "rootDir": "./App", // définit le dossier des fichiers ts
    "experimentalDecorators": true, // définit le support expérimental des décorateurs
    "target": "es5", // cible
    "module": "commonjs"
  },
  "exclude" : ["node_modules"] // exclure le dossier node_modules de la compilation
}
```

**Vous l’avez deviné ce fichier est un fichier propre à TypeScript et sa configuration.**

## Exercice 7

Mettez en place cette configuration et créez un fichier **app.ts** puis testez la compilation à l’aide de la
commande suivante : ```tsc```  
TypeScript va utiliser le fichier **tsconfig.json** pour récupérer les paramètres de compilation. Notez que
votre fichier compilé se trouve dans le dossier « dist ».

Le paramètre **module** permet de préciser que l’on souhaite utiliser ce support pour la gestion des
modules.

Le paramètre experimentalDecorators à true permet l’utilisation des décorateurs en TypeScript.

Exécutez la commande ci-dessous l’option -w permet de watch le code en continu et de compiler
toutes vos modifications sans relancer celle-ci :

```bash
tsc -w
```

*Remarques : pour la suite des exercices/applications utilisez cette manière de vous organiser avec ce
fichier de configuration TypeScript et ces dossiers.*