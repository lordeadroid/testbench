sudo apt update

# Brave
sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list
sudo apt install brave-browser

# VS Code
sudo apt install code

# Kitty
sudo apt install kitty

# Autojump 
sudo apt install autojump

# Java (openJDK 8)
sudo apt install openjdk-8-jdk
