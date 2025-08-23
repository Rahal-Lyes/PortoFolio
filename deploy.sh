#!/usr/bin/env sh

# Arrêter le script si une commande échoue
set -e

# Build du projet
npm run build

# Aller dans le dossier de build
cd dist

# Initialiser un dépôt Git (si pas déjà présent)
git init
git checkout -b main
git add -A
git commit -m 'deploy'

# ⚠️ Mets bien ton dépôt GitHub ici :
# --- Version SSH ---
git remote add origin git@github.com:Rahal-Lyes/PortoFolio.git


# --- OU version HTTPS ---
# git remote add origin https://github.com/Rahal-Lyes/PortoFolio.git

# Forcer le push vers gh-pages
git push -f origin main:gh-pages

# Revenir au dossier précédent
cd -
