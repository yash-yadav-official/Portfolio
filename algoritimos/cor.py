from PIL import Image

# Carrega a imagem
image_path = "C:\\Users\\Lenovo\\Desktop\\site\\site\\vcard-personal-portfolio\\algoritimos\\imagem1.png"
image = Image.open(image_path).convert("RGBA")

# Converte a imagem para uma lista de pixels
data = image.getdata()

# Cria uma nova lista para armazenar os novos pixels
new_data = []

# Define as cores que você quer alterar
for item in data:
    # Troca pixels pretos por vermelho
    if item[0] < 100 and item[1] < 100 and item[2] < 100:  # você pode ajustar o limiar conforme necessário
        new_data.append((229, 26, 26, item[3]))  # Vermelho
    else:
        new_data.append(item)

# Atualiza a imagem com os novos dados
image.putdata(new_data)

# Salva a imagem
output_path = "C:\\Users\\Lenovo\\Desktop\\site\\site\\vcard-personal-portfolio\\algoritimos\\imagem_com_cor_alterada.png"
image.save(output_path)
