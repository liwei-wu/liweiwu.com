---
id: gourd-before-magic
type: essay
locale: vi
title: Quả bầu đã có, nhưng phép màu vẫn chưa xuất hiện
description: Trong năm đầu tiên sau khi nhảy xuống dòng sông tiếp theo, chúng tôi đã phát hành 27 phiên bản và bắt đầu hiểu cách biến một bản demo thành sản phẩm có thể phục vụ người dùng lâu dài.
slug: gourd-before-magic
published_at: 2024-12-31
translation_status: ai-translated
source_locale: zh-Hans
source_hash: f9dc9ea4e7b36be0
topics:
  - Khởi nghiệp
  - Sản phẩm
  - Trí tuệ nhân tạo
  - MagicGourd
  - Ghi chú thông minh
---

Ngày cuối cùng của năm 2023, tôi đã viết bài đầu tiên trên blog cá nhân này, “Nhảy xuống dòng sông tiếp theo”. Câu cuối của bài ấy là: “Lúc này, tôi vẫn đang ở dưới nước.”

Một năm đã trôi qua, tôi vẫn đang ở dưới nước.

Dòng sông không trở nên dễ vượt qua hơn, bờ bên kia cũng không rõ ràng hơn. Nhưng so với một năm trước, đã có một chút khác biệt. Nửa cuối năm 2023, sau khi rời SenseTime—nơi tôi đã làm việc gần mười năm—phần lớn thời gian của tôi là những ngày vật lộn và tìm kiếm phương hướng. Sang năm 2024, chúng tôi bắt đầu dành phần lớn thời gian để phát triển một sản phẩm cụ thể.

Mạch chính của năm nay là sản phẩm; mạch phụ là vài lần thử gọi vốn rất hạn chế. Chúng tôi không nhận được đầu tư, cũng chưa đón nhận tín hiệu thị trường nào đủ mạnh để chứng minh hướng đi, nhưng đã phát triển và đưa lên mạng 27 phiên bản.

Sau khi nhảy xuống dòng sông tiếp theo, cuối cùng chúng tôi cũng bắt đầu học cách bơi về phía trước.

## Trước hết, làm ra một quả bầu

Trong bài viết cuối năm ngoái, tôi nói rằng cuối cùng mình đã quyết định bắt đầu từ ghi chú thông minh.

Từ thời trung học, tôi đã có thói quen “đọc là phải cầm bút”. Khi đọc một cuốn sách hay bài viết, hoặc xem một đoạn video, tôi chú ý đến những chỗ khiến mình rung động, đánh dấu chúng rồi ghi lại suy nghĩ nảy sinh lúc đó. Tôi gọi quá trình này là “tìm điểm”: nhận ra điều chạm đến mình và ghi lại cảm hứng.

Đôi khi những điểm ấy chỉ là một câu nói, một bức ảnh hay một khung hình. Ở thời điểm đó, chúng dường như chẳng liên quan đến nhau. Nhưng khi tích lũy đủ nhiều, vào một lúc nào đó chúng sẽ kết nối lại, giúp tôi hiểu một vấn đề hoặc hình thành một nhận định mà trước đây mình chưa từng nghĩ đến.

Trong nhiều năm, tôi đã thử nhiều công cụ ghi chú khác nhau nhưng vẫn không tìm được sản phẩm nào thật sự phù hợp với thói quen này. Sau khi rời SenseTime, tôi tìm đến người bạn nối khố từng cùng mình trèo tổ chim và đánh nhau thuở nhỏ, rồi quyết định cùng nhau làm ra nó. Trong nửa đầu năm 2024, phần lớn thời gian chúng tôi làm việc tại một không gian làm việc chung ở tòa Sohu.

Chúng tôi đặt tên sản phẩm là MagicGourd.

“Gourd” cũng là tên gọi ở nhà của con tôi. Khi đặt tên, tôi không cố ý gửi gắm quá nhiều ý nghĩa. Nhưng nhìn lại, có lẽ trong đó ẩn chứa một mong ước vô thức: tôi hy vọng sản phẩm đầu tiên mình làm sau khi toàn tâm khởi nghiệp cũng có thể lớn lên từ từ dưới sự chăm sóc của chúng tôi, giống như một đứa trẻ.

Tất nhiên, sản phẩm không phải là một đứa trẻ. Nhưng chúng có một điểm giống nhau: được tạo ra mới chỉ là khởi đầu; sự chăm sóc và trưởng thành lâu dài sau đó mới là phần thật sự khó khăn.

Bộ não thứ hai đích thực mà chúng tôi hình dung vẫn còn rất xa thực tế và không thể hoàn thành trong một bước. Vì vậy, chúng tôi quyết định trước tiên thực hiện bước căn bản nhất: cho phép người dùng dễ dàng đánh dấu điều chạm đến mình và viết lại cảm hứng khi duyệt web, đọc PDF trực tuyến hoặc xem video.

Trước hết, làm ra một quả bầu có thể chứa những điểm ấy.

## Những quyết định sản phẩm phía sau một nút tô sáng

Ngay sau khi bắt đầu phát triển, chúng tôi gặp một câu hỏi tưởng như nhỏ đến mức không thể nhỏ hơn: nút tô sáng nên trông như thế nào?

Nó chỉ nên là một nút hay là một bảng gồm nhiều thao tác? Sau khi người dùng chọn văn bản, nó nên xuất hiện ngay hay chờ người dùng chủ động gọi ra? Nó nên xuất hiện ở đâu và biến mất khi nào? Nếu có người không thích nó tự động hiện lên, chúng tôi có nên cung cấp thêm một công tắc hay không?

Mỗi lựa chọn được thêm vào dường như có thể đáp ứng thêm nhu cầu, nhưng đồng thời cũng làm tăng chi phí hiểu và thao tác. Cho nút xuất hiện chủ động hơn giúp tính năng dễ được phát hiện, nhưng cũng có thể liên tục ngắt quãng việc đọc. Để nó yên lặng hơn có thể giúp người dùng tập trung, nhưng họ cũng có thể hoàn toàn không biết tính năng ấy tồn tại.

Những câu hỏi này không có một đáp án chuẩn theo nghĩa thuật toán.

Khi làm thuật toán, chúng tôi quen hỏi liệu một năng lực có thể thực hiện được không, độ chính xác có thể tăng không, hiệu năng có đạt yêu cầu không. Sau khi làm sản phẩm, chúng tôi bắt đầu liên tục tự hỏi: một tính năng nên can thiệp vào lúc nào và lúc nào nên lùi vào hậu cảnh?

Một tính năng chạy được chỉ chứng minh rằng công nghệ khả thi. Người dùng có hiểu nó hay không, có thấy bị làm phiền không, có muốn giữ nó trong đời sống hằng ngày không—những điều đó mới quyết định sản phẩm có đứng vững hay không.

Trước đây, khi làm thuật toán và các dự án lớn, tôi cũng từng xử lý rất nhiều vấn đề của thế giới thực. Nhưng khi thật sự bắt đầu từ con số không để tạo ra một sản phẩm, những quyết định từng được chia sẻ giữa các nhóm sản phẩm, thiết kế, khách hàng và kỹ thuật bỗng cùng rơi lên vai chúng tôi. Chúng tôi phải quyết định điều gì nên được nhìn thấy, điều gì nên ẩn phía sau; điều gì cần làm ngay và điều gì, dù hữu ích, cũng phải tạm thời chưa làm.

Chúng tôi dần nhận ra rằng sản phẩm không được tạo nên bởi số lượng tính năng, mà bởi vô số sự lựa chọn. Đôi khi, “không xuất hiện” và “không làm phiền” tự thân cũng là một năng lực của sản phẩm.

## Sản phẩm phải đứng vững theo thời gian

Nút bấm có thuận tay hay không là trải nghiệm người dùng có thể cảm nhận ngay. Nhưng nhiều yếu tố quyết định sản phẩm có thể được sử dụng lâu dài lại nằm ở những nơi họ không nhìn thấy.

MagicGourd lưu trữ lịch sử đọc, những khoảnh khắc rung động và suy nghĩ của một người. Chúng tôi muốn bảo vệ quyền riêng tư của người dùng nhiều nhất có thể, đồng thời vẫn cung cấp đồng bộ đa thiết bị và các dịch vụ thông minh trong tương lai. Để làm được cả hai, chúng tôi chọn mã hóa dữ liệu ngay trên thiết bị và chỉ lưu bản mã ở máy chủ. Điều này làm tăng độ phức tạp của phát triển và bảo trì, nhưng nếu người dùng không thể thật sự sở hữu dữ liệu của mình, thì ngay từ đầu đã không thể nói đến một bộ não thứ hai đích thực.

Đồng bộ là một vấn đề khác trông có vẻ đơn giản nhưng thực tế rất phức tạp. Khi người dùng tạo một đoạn tô sáng, giao diện phải phản hồi ngay, không thể dừng lại chờ chỉ vì mạng kém. Ngay cả khi mạng yếu hoặc mất kết nối, việc ghi chép cũng không được gián đoạn; khi mạng trở lại, dữ liệu trên các thiết bị khác nhau phải đồng bộ chính xác, không bị trùng lặp, ghi đè lẫn nhau, càng không được âm thầm biến mất.

Điều đó buộc chúng tôi phải suy nghĩ lại cách frontend và backend phối hợp, cách cơ sở dữ liệu tổ chức dữ liệu, cách duy trì khả năng tương thích khi nâng cấp phiên bản và cách phục hồi khi xảy ra lỗi. Người dùng thường không nhìn thấy những thiết kế này, nhưng chỉ cần một mắt xích gặp sự cố, toàn bộ độ phức tạp sẽ lập tức biến thành trải nghiệm trực tiếp nhất của họ.

Trải nghiệm ngắn hạn tương đối dễ tạo ra. Làm một bản trình diễn mượt mà khiến người dùng ấn tượng trong vài phút không quá khó. Nhưng trong mắt chúng tôi, đó vẫn chỉ là một bản demo.

Một bản demo chỉ cần đứng vững trước mắt; một sản phẩm phải đứng vững theo thời gian.

Nếu một sản phẩm được kỳ vọng đồng hành với người dùng mười năm, nền móng cho trải nghiệm của mười năm sau phải được xây từ hôm nay. Với một công cụ thông thường, một lần trục trặc có thể chỉ gây bất tiện tạm thời; với một sản phẩm chứa nhiều năm ghi chú, chỉ một lần mất dữ liệu cũng đủ phá hủy toàn bộ niềm tin mà người dùng đã gây dựng.

Chúng tôi không thể hứa rằng hệ thống sẽ không bao giờ gặp vấn đề, nhưng phải coi “không làm mất dù chỉ một ghi chú của người dùng” là một trong những ràng buộc thiết kế quan trọng nhất. Trải nghiệm sản phẩm không chỉ diễn ra trên màn hình, mà còn diễn ra trong cơ sở dữ liệu mà người dùng không thể nhìn thấy.

## Một mạch phụ gọi vốn rất ngắn

Gọi việc huy động vốn là mạch phụ của năm nay có lẽ còn hơi phóng đại. Tổng cộng chúng tôi chỉ tiếp xúc với ba tổ chức đầu tư; phần lớn thời gian còn lại vẫn dành cho phát triển sản phẩm.

Ý nghĩ lúc đó rất đơn giản: tìm một vài nhà đầu tư giai đoạn sớm mà chúng tôi trực tiếp hoặc gián tiếp quen biết, giới thiệu ngắn gọn việc mình đang làm và hy vọng nhận được khoản đầu tư thiên thần đầu tiên.

Ý nghĩa của khoản đầu tư ấy đối với chúng tôi không chỉ nằm ở tiền. Sản phẩm chưa hoàn thiện và chưa có tín hiệu thị trường rõ ràng; ở giai đoạn đó, chúng tôi muốn nhận trước một phản hồi bên ngoài để biết liệu hướng đi này có đứng vững trong mắt những nhà đầu tư xuất sắc hay không.

Những lần thử ấy đều không có kết quả. Khi đó, chúng tôi cho rằng môi trường gọi vốn dành cho ứng dụng AI không thuận lợi và bản thân mình cũng chưa biết cách trao đổi với nhà đầu tư. Cả hai yếu tố đều có thật. Nhưng nhìn lại, còn một sự thật trực tiếp hơn: chúng tôi dành rất ít thời gian cho gọi vốn và chỉ tiếp xúc với ba tổ chức. Thay vì nói rằng đã trải qua một vòng gọi vốn thất bại, chính xác hơn là chúng tôi chỉ có vài cuộc trao đổi ban đầu với các tổ chức đầu tư.

Điều đáng suy ngẫm hơn là phản ứng của chính mình khi đối mặt với chất vấn.

Khi tham gia phỏng vấn tại MiraclePlus, những người ngồi đối diện đều là những người tôi vô cùng kính trọng. Khi họ liên tục thách thức ý tưởng của chúng tôi, thậm chí đặt câu hỏi rất sắc, tôi nảy sinh một tâm thế phức tạp: vì chúng tôi đến để tìm kiếm đầu tư, có lẽ mình nên tôn trọng phán đoán của họ, thậm chí ở mức độ nào đó tiến gần hơn đến đáp án mà họ mong đợi.

Nhưng nếu chúng tôi muốn thông qua gọi vốn để nhận được phản hồi chân thực, thì việc chiều theo họ bằng những lời mình không thật sự tin lại chính là điều khiến phản hồi mất ý nghĩa.

Sau đó tôi cũng bắt đầu hoài nghi liệu điều mình muốn lúc ấy có thật sự chỉ là phản hồi. Có lẽ trước khi sản phẩm được thị trường kiểm chứng, chúng tôi còn muốn được một nhóm nhà đầu tư xuất sắc công nhận, qua đó xác nhận rằng mình chưa đi sai hướng.

Điều này giống như ở trong một dòng sông xa lạ và mong người trên bờ nói trước cho chúng tôi biết nên bơi về đâu. Nhưng cuối cùng, người sáng lập phải tự mình cảm nhận dòng chảy và đưa ra phán đoán dựa trên những sự thật trước mắt.

## “Hai lão Xuanming” ở tòa Dongsheng

Nửa cuối năm 2024, chúng tôi chuyển từ tòa Sohu sang tòa Dongsheng.

Tôi và người bạn nối khố thường xuyên lập trình theo cặp trong thời gian dài, hay ngồi cạnh nhau nhìn vào cùng một màn hình để thảo luận. Giữa một nhóm nhà sáng lập trẻ trong không gian làm việc chung, cách làm việc này rất dễ gây chú ý. Sau một thời gian, mọi người đặt cho chúng tôi biệt danh “Hai lão Xuanming”.

Đó là một chuyện rất thú vị. Hai người từng cùng nhau trèo tổ chim và đánh nhau thuở nhỏ, hai mươi năm sau lại ngồi trong một văn phòng chung, cùng làm một sản phẩm có tên MagicGourd.

Cũng chính tại tòa Dongsheng, chúng tôi quen Kehan. Khi đó anh phụ trách cộng đồng và tuyển mộ dự án khởi nghiệp tại MiraclePlus. Lần đầu nói chuyện với chúng tôi, anh hỏi: “Hai anh là người khởi nghiệp phải không? Tôi đã quan sát hai anh khá lâu rồi. Trong cả văn phòng này, hai anh là hai người có trạng thái khởi nghiệp rõ nhất.”

Sau đó, khi biết chúng tôi từng tham gia phỏng vấn tại MiraclePlus, anh nói chuyện với chúng tôi về tình hình lúc ấy. Anh cho biết việc nhà đầu tư liên tục chất vấn một ý tưởng khởi nghiệp đôi khi không chỉ để bày tỏ phản đối, mà còn để kiểm tra xem người sáng lập có thật sự suy nghĩ thấu đáo hay không và có thể giữ vững phán đoán của mình dưới áp lực hay không.

Điều đó khiến tôi hiểu lại cuộc phỏng vấn năm ấy.

Tôn trọng nhà đầu tư không có nghĩa là giao phán đoán của mình cho họ. Người sáng lập vừa phải hiểu vì sao người khác phản đối, vừa không thể vì đối phương đáng kính mà từ bỏ phán đoán của mình. Điều thật sự cần tránh không phải là thay đổi quan điểm dựa trên sự thật mới, mà là khi còn chưa suy nghĩ thấu đáo đã thay đổi cách diễn đạt chỉ để được công nhận.

Đây cũng không chỉ là bài học trong gọi vốn. Khi làm sản phẩm, mỗi ngày chúng tôi đều đối mặt với phản hồi của người dùng, cách làm của sản phẩm cùng ngành và các xu hướng công nghệ mới. Những tín hiệu bên ngoài ấy đều đáng được tìm hiểu nghiêm túc, nhưng quyết định điều gì nên đi vào sản phẩm vẫn là trách nhiệm của chính chúng tôi.

## Quả bầu đã có

Đến cuối năm 2024, MagicGourd đã phát triển và đưa lên mạng 27 phiên bản.

Chúng tôi bắt đầu từ việc chú thích văn bản và hình ảnh trên các trang web thông thường, dần hỗ trợ PDF trực tuyến rồi mở rộng cùng một phương pháp sang Bilibili và YouTube. Người dùng có thể đánh dấu một khung hình khiến mình rung động trong video, viết ghi chú và nhanh chóng quay lại những khoảnh khắc ấy trên dòng thời gian. Chúng tôi cũng lần lượt bổ sung quản lý thẻ, tìm kiếm, xuất dữ liệu và đồng bộ dữ liệu giữa các trình duyệt, thiết bị khác nhau.

Mỗi loại nội dung được thêm vào đều kéo theo rất nhiều việc thích ứng. Các trang web không có cấu trúc thống nhất, còn nền tảng video cũng liên tục thay đổi. Một tính năng hoạt động bình thường trên một trang có thể biểu hiện hoàn toàn khác khi chuyển sang trang hay trình duyệt khác. Rất nhiều thời gian của chúng tôi không được dùng để tạo ra một năng lực mới dễ thấy, mà để xử lý đủ loại trường hợp biên, giúp những năng lực hiện có hoạt động ổn định hơn.

Trong 27 phiên bản liên tục được phát hành trong năm, chúng tôi không phát hiện trường hợp dữ liệu người dùng bị mất hoặc hư hỏng. Những sự cố thỉnh thoảng xuất hiện chủ yếu tập trung ở các khâu dịch vụ như mã xác minh đăng nhập; sau khi nhận phản hồi, phần lớn chúng tôi đều có thể nhanh chóng xác định và giải quyết. Điều này không chứng minh rằng từ nay hệ thống sẽ không bao giờ sai, nhưng ít nhất cho thấy thời gian chúng tôi đầu tư vào những nơi vô hình không hề lãng phí.

Tháng 11, chúng tôi giới thiệu tính năng ghi chú video trên [sspai](https://sspai.com/post/93549). Sau khi bài viết được đăng, người dùng dần để lại phản hồi trong phần bình luận. Trước đây, có người muốn lưu một khung hình cần thiết trong video chỉ có thể chụp màn hình rồi dán sang nơi khác; sau khi dùng MagicGourd, họ viết: “Plugin này cứu tôi rồi!” Có người thích các dấu hình giọt nước trên dòng thời gian video, cũng có người hy vọng chúng tôi bổ sung ghi chú độc lập hoặc sớm hỗ trợ Safari.

Nhận được phản hồi của người dùng là một trong những điều khiến chúng tôi vui nhất trong năm.

Điều thật sự khiến chúng tôi vui không chỉ là sản phẩm được khen ngợi, mà là cuối cùng đã có người đưa thứ chúng tôi làm ra vào đời sống thật của họ. Họ cũng đưa ra nhiều đề xuất hữu ích, thúc đẩy chúng tôi tiếp tục phán đoán: ý kiến nào phản ánh một vấn đề chung, ý kiến nào xuất phát từ thói quen sử dụng cá nhân; điều gì nên giải quyết ngay, điều gì tuy hữu ích nhưng chưa phù hợp để đưa vào sản phẩm ở giai đoạn hiện tại.

Nếu tách tên sản phẩm thành hai nửa, đến cuối năm nay, ít nhất chúng tôi đã làm ra được “quả bầu”: một vật chứa có thể thu thập, lưu giữ và quản lý những khoảnh khắc rung động cùng cảm hứng.

## Phép màu vẫn chưa xuất hiện

Nhưng đó vẫn chưa phải là phép màu mà chúng tôi hình dung.

Nó chắc chắn sẽ sử dụng AI, nhưng tuyệt đối không chỉ là tạo bản tóm tắt cho một bài viết. Tóm tắt có thể nén thông tin, nhưng không nhất thiết thúc đẩy nhận thức.

Theo cách hiểu của chúng tôi, thông tin là nội dung một người tiếp nhận; tri thức là thông tin đã được hiểu và tổ chức; còn nhận thức là cách một người hiểu thế giới, thiết lập liên hệ, hình thành phán đoán và điều chỉnh chúng khi trải nghiệm mới xuất hiện.

AI ngày nay rất giỏi xử lý thông tin và ngày càng giỏi tổ chức tri thức. Nó có thể tóm tắt bài viết, trích xuất từ khóa và trả lời những câu hỏi đã có sẵn trong nội dung. Nhưng nếu nó chỉ nén mười trang chữ thành một trang hoặc thêm một khung trò chuyện bên cạnh phần mềm ghi chú, thì nó vẫn chưa chạm tới điều chúng tôi thật sự muốn làm.

Chúng tôi hy vọng MagicGourd trong tương lai có thể hiểu những ghi chép một người tích lũy trong thời gian dài, để những rung động rải rác ở các thời điểm và phương tiện khác nhau gặp lại nhau. Nó có thể phát hiện những chủ đề lặp đi lặp lại nhưng chưa bao giờ được diễn đạt rõ ràng, trình bày các mối liên hệ và mâu thuẫn giữa những ghi chú, tìm ra những câu hỏi lâu nay chưa được trả lời, hoặc đánh thức một suy nghĩ cũ vào đúng thời điểm.

Quan trọng hơn, nó nên đặt ra những câu hỏi người dùng chưa từng nghĩ đến nhưng đáng để tiếp tục truy vấn, qua đó giúp họ hình thành nhận định mới của riêng mình.

Ở đây phải có một ranh giới rõ ràng: AI không thể đóng gói suy đoán của nó thành một “sự thật” mà người dùng chưa nhận ra. Điều nó có thể làm là đề xuất những mối liên hệ, mâu thuẫn và câu hỏi có thể tồn tại; còn các mối liên hệ ấy có đứng vững hay không cuối cùng vẫn phải do người dùng phán đoán.

Phép màu không phải là suy nghĩ thay cho người dùng, mà là giúp họ nhìn thấy phần suy nghĩ mình còn chưa hoàn tất.

Trong năm nay, chúng tôi đã làm một số bản demo nội bộ liên quan đến ý tưởng này. Chúng có thể tạo bản tóm tắt, sắp xếp nội dung và trả lời câu hỏi; nhìn qua đã mang dáng dấp của AI. Nhưng chúng vẫn còn rất xa điều chúng tôi gọi là “thúc đẩy nhận thức”, nên chúng tôi không vội vàng đưa lên mạng chỉ để theo kịp làn sóng AI.

AI càng tham gia sâu vào quá trình nhận thức của một người, dữ liệu mà nó cần tiếp cận càng riêng tư. Điều này càng khiến chúng tôi tin chắc rằng quyền riêng tư và quyền sở hữu dữ liệu không phải là vấn đề kỹ thuật nằm ngoài phép màu, mà là tiền đề để phép màu có thể tồn tại. Chúng tôi không thể vừa tuyên bố muốn hiểu người dùng, vừa yêu cầu họ từ bỏ quyền kiểm soát dữ liệu của chính mình.

Vì vậy, đến ngày 31 tháng 12 năm 2024, quả bầu đã có, nhưng phép màu vẫn chưa xuất hiện.

Chúng tôi chưa nhận được đầu tư, chưa có tín hiệu thị trường mang tính quyết định, cũng chưa xây dựng được mô hình kinh doanh rõ ràng. Chúng tôi vẫn không biết cuối cùng dòng sông này sẽ chảy về đâu.

Nhưng chúng tôi đã đưa lên mạng 27 phiên bản, bắt đầu có người dùng đưa sản phẩm vào cuộc sống của họ, và cũng bắt đầu hiểu cách biến một bản demo có thể chạy thành một sản phẩm đích thực để chịu trách nhiệm lâu dài với nó.

Một năm trước, tôi đã viết: “Lúc này, tôi vẫn đang ở dưới nước.”

Một năm sau, tôi vẫn đang ở dưới nước. Dòng sông không trở nên dễ vượt qua hơn, bờ bên kia cũng không rõ ràng hơn.

Nhưng chúng tôi đã làm ra quả bầu.

Phép màu vẫn chưa xuất hiện. Chúng tôi cũng chưa đến được bờ bên kia, nhưng ít nhất đã bắt đầu bơi về phía trước.
