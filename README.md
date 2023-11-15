# To-Do List Uygulaması 📝

Bu basit To-Do List uygulaması, React ve Spring kullanılarak geliştirilmiştir. Backend tarafı için [bu linkteki reposu](https://github.com/IsmailTosunTnyl/to-do-spring-techcareer.net) ziyaret edebilirsiniz.

## Özellikler

- ✅ **Todo Ekleme:** Yeni görevleri ekleyebilirsiniz.
- ❌ **Todo Silme:** Tamamlanan görevleri silebilirsiniz.
- 🖊️ **Todo Düzenleme:** Var olan görevleri düzenleyebilirsiniz.
- 🔍 **Filtreleme:** Görevleri durumlarına göre filtreleyebilirsiniz.
- 🗑️ **Toplu Silme:** Birden fazla görevi aynı anda silebilirsiniz.

## Teknolojiler

- **Frontend:** React kullanılmıştır. State yönetimi için Redux tercih edilmiştir.
- **Backend:** Spring framework kullanılmıştır.
- Her iki repo içinde Docker dosyaları hazırlanmış, Github Actions kullanılarak otomatik testlerin çalıştırılması ve sunucuya deploy edilmesi sağlanmıştır.

## Live Demo

Canlı demo için [buraya](http://ismailtosun.net:4016/) tıklayın.

## Kurulum

### Docker Kullanarak

1. Docker Container dosyasını [buraya](https://hub.docker.com/repository/docker/ismailtosun/reacttodo-techcareer/) tıklayarak indirin ya da
2. Bu komutu çalıştırın ve istediğiniz port'u belirtin:
   ```
   docker run -p 3000:3000 ismailtosun/reacttodo-techcareer:lastest
   ```

### Proje Dosyalarını Kullanarak

1. Proje dosyalarını bilgisayarınıza kopyalayın.
2. Frontend klasörüne gidin: `cd to-do-react-techcareer.net`
3. Gerekli bağımlılıkları yüklemek için: `npm install`
4. Uygulamayı başlatmak için: `npm start`

## Kullanım

1. Tarayıcınızda `http://localhost:3000` adresine gidin.
2. To-Do List uygulamasının keyfini çıkarın!

## Nasıl Çalıştırılır?

Proje klasöründe terminali açın ve aşağıdaki komutları sırasıyla çalıştırın:

```bash
# Proje klasörüne gidin
cd path/to/project

# Frontend bağımlılıklarını yükleyin
cd to-do-react-techcareer.net
npm install

# Frontend'i başlatın
npm start
```

Bu adımları takip ederek uygulamayı yerel ortamda çalıştırabilirsiniz. 🚀
