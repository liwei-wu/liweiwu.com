---
id: new-paper-and-pen-new-artists
type: essay
locale: vi
title: "Giấy và Bút mới, Nghệ sĩ mới"
subtitle: "Khi mã trở thành một sản phẩm trung gian, ai là tác giả của phần mềm?"
description: "Khi việc triển khai không còn là phần khan hiếm nhất, công việc của con người sẽ ra sao?"
slug: new-paper-and-pen-new-artists
published_at: 2026-08-03
revised_at: 2026-08-04
translation_status: ai-translated
source_locale: zh-Hans
source_hash: c4e25867a729fb37
topics:
  - trí tuệ nhân tạo
  - Phần mềm
  - Quyền tác giả
---

Trong gần sáu tháng làm việc kỹ thuật, tôi đã cùng các Coding Agent xây dựng một số sản phẩm chưa phát hành, chỉ thông qua ngôn ngữ tự nhiên, tài liệu sản phẩm, ràng buộc kiến trúc, kết quả khi chạy và phản hồi nghiệm thu. Các sản phẩm trải rộng từ ứng dụng máy tính, tiện ích trình duyệt đến dịch vụ backend và cơ sở dữ liệu.

Tôi không viết một dòng mã nào. Tôi cũng không đọc một dòng nào.

Nhưng điều đó không có nghĩa là tôi giao sản phẩm cho AI. Tôi vẫn quyết định sản phẩm cần giải quyết vấn đề gì, xác định hệ thống phải hoạt động ra sao, phán đoán những ranh giới không được vượt qua, kiểm chứng độ tin cậy của kết quả và chịu trách nhiệm về phần mềm cuối cùng. Điều thay đổi chỉ là cách tôi tương tác với khâu triển khai.

Điều này buộc tôi phải xem xét lại một câu hỏi từng có vẻ đơn giản: nếu ai đó không còn viết mã bằng tay nữa nhưng vẫn xác định công việc, quyết định xem nó có thành công hay không và vẫn chịu trách nhiệm về nó, thì họ có còn là tác giả của phần mềm không?

Thực tiễn này không chứng minh rằng tất cả phần mềm đều có thể được xây dựng theo cách này. Nó thậm chí còn không chứng minh được rằng những sản phẩm chưa được tung ra thị trường này sẽ thành công trên thị trường. Nhưng đối với các loại ứng dụng chúng tôi xây dựng, quy trình làm việc tập trung vào tác nhân mã hóa không còn chỉ là cách để lập trình nhanh hơn nữa. Nó đang trở thành một phương pháp tiếp cận kỹ thuật có thể duy trì việc lập kế hoạch, thực hiện, thử nghiệm, sửa chữa và lặp lại.

Thay đổi quan trọng không phải là “AI có thể viết mã”. Triển khai từng là một trong những phần khan hiếm nhất trong quá trình tạo ra phần mềm; bây giờ nó đang bắt đầu lùi dần vào nền.

Khi việc triển khai không còn là phần khan hiếm nhất, công việc của con người sẽ ra sao?

Đó là câu hỏi của bài viết này.

## Ranh giới của AI đang chuyển động

AI chưa bao giờ là một thuật ngữ cố định. Mọi người có xu hướng gọi một thứ gì đó là AI trong khi máy tính vẫn chưa thể thực hiện được điều đó một cách đáng tin cậy; một khi khả năng này đã trưởng thành và đi vào các sản phẩm hàng ngày, nó sẽ nhanh chóng trở thành công nghệ thông thường và không còn giống AI nữa.

Con đường riêng của tôi cũng đi theo ranh giới này. Ở trường cấp hai và đại học, tôi đã nghiên cứu về robot có bánh xe, sử dụng cảm biến và điều khiển phản hồi để khiến chúng đi theo đường đi, tránh chướng ngại vật và phối hợp trong đội hình. Trong thời gian học sau đại học, tôi đã nghiên cứu về thị giác máy tính đồng thời tham gia [SenseTime][entity-sensetime] mới thành lập với tư cách là nhân viên sáng lập ban đầu. Tôi đã giúp đưa các công nghệ nhận diện sự sống của khuôn mặt và thị giác công nghiệp vào các ứng dụng quy mô lớn, bao gồm cả điện thoại thông minh và đường sắt tốc độ cao. Ngày nay, các mô hình nền tảng có mục đích chung và các tác nhân mà chúng hỗ trợ đã đẩy ranh giới về phía trước một lần nữa. Các hệ thống này không còn chỉ giải quyết các vấn đề riêng lẻ nữa. Họ bắt đầu hiểu mục tiêu, sử dụng các công cụ và tiếp tục hành động để đáp lại phản hồi; công việc của tôi cũng hướng tới những sản phẩm này. Nhìn lại, từ việc điều khiển chuyển động và hiểu hình ảnh đến hoàn thành toàn bộ nhiệm vụ, máy móc đang đảm nhận chuỗi công việc dài hơn và hoàn thiện hơn.

Vì vậy, trong bài luận này, AI chủ yếu chỉ các tác nhân được vận hành bởi mô hình nền tảng đa dụng, trong đó Coding Agent là một ví dụ tiêu biểu. Hướng phát triển của chúng là tự chủ thực hiện những nhiệm vụ dài hơi hơn, dần tự tiến hóa, thậm chí có khả năng huấn luyện thế hệ kế nhiệm của chính mình.

Năm 2025, Andrej Karpathy dùng “vibe coding” để mô tả một cách lập trình khá tùy hứng: nói cho AI biết bạn muốn gì, chấp nhận mã nó tạo ra, đưa thông báo lỗi trở lại cho nó, thậm chí quên luôn sự tồn tại của mã. [1] Nhưng mức độ buông tay ấy có một điều kiện tiên quyết: chi phí của thất bại phải thấp. Khi đó, với những sản phẩm nghiêm túc, chúng tôi vẫn dùng Cursor. Lập trình viên con người dẫn dắt công việc và chịu trách nhiệm về mã; tác nhân chỉ hỗ trợ.

Đến đầu năm 2026, chúng ta lại thấy ranh giới tiến về phía trước. Karpathy sau này gọi cách làm việc mới là “kỹ thuật tác nhân”: các nhà phát triển không còn chỉ đơn thuần sử dụng AI để hoàn thiện mã mà còn tổ chức và giám sát các tác nhân khi họ thực hiện các nhiệm vụ kỹ thuật trong khi vẫn giữ trách nhiệm đánh giá và chất lượng. [2] Cái tên không quan trọng. Điều quan trọng là AI đang chuyển từ đưa ra từng đề xuất một sang hành động bền vững trong giới hạn.

Đối với một số người sáng tạo phần mềm, ngôn ngữ tự nhiên và tài liệu đã trở thành một lớp mới để thể hiện ý định.

## Mã đang trở thành một sản phẩm trung gian

Lịch sử của điện toán cũng là lịch sử của việc thêm các lớp trừu tượng.

Người ta lần đầu tiên vận hành máy móc bằng công tắc và cáp nối. Sau đó là mã máy, hợp ngữ và ngôn ngữ lập trình cấp cao. Mỗi lớp mới che giấu một số sự phức tạp bên dưới và cho phép mọi người làm việc gần hơn với ý định của họ.

Coding Agent bổ sung một lớp trừu tượng mới cho quá trình phát triển phần mềm. Chúng giống như một siêu trình biên dịch bất định: trình biên dịch truyền thống chuyển một chương trình được đặc tả hình thức thành lệnh máy, còn Coding Agent cố gắng triển khai ý định của con người thành giao diện, dữ liệu, dịch vụ và mã.

Sự khác biệt quan trọng. Ngôn ngữ của con người thật mơ hồ. Các yêu cầu thường không đầy đủ và các ràng buộc có thể xung đột. Tác nhân không thể dịch một cách máy móc một câu thành một kết quả chính xác duy nhất. Nó phải xoay vòng thông qua việc hiểu, lập kế hoạch, thực hiện, thực hiện và xác minh.

Ngôn ngữ tự nhiên chưa thay thế được ngôn ngữ lập trình. Chính xác hơn, ngôn ngữ tự nhiên và tài liệu đang trở thành một lớp ý định được duy trì bởi con người, trong khi mã ngày càng đóng vai trò là phương tiện triển khai được tạo ra và duy trì bởi các tác nhân.

Điều đó làm cho mã giống một tạo phẩm trung gian hơn, nhưng “trung gian” không có nghĩa là không quan trọng. Mã vẫn phải chính xác, an toàn và có thể bảo trì. Đơn giản là nó có thể không cần phải được một người viết và đọc từng dòng một. Hầu hết các lập trình viên không kiểm tra mã máy do trình biên dịch phát ra, nhưng họ vẫn chịu trách nhiệm về những gì chương trình thực hiện.

Điều này thay đổi những gì chúng ta cần làm rõ.

Tài liệu từng là một lời giải thích về mã. Trong công việc của chúng tôi, mối quan hệ đang bắt đầu đảo ngược: nhiều mã hơn đang được tạo và xác minh từ các tài liệu. Tại sao sản phẩm tồn tại, hệ thống phải hoạt động như thế nào, ranh giới nào không thể vượt qua và bằng chứng nào cho thấy sản phẩm đáp ứng các yêu cầu của nó—những thứ này, một khi được coi là phần đính kèm với mã, sẽ trở thành nguồn của chính phần mềm.

Sau đó: "Nói thì rẻ. Cho tôi xem mã."

Bây giờ: "Mã rẻ tiền. Cho tôi xem tài liệu."

Không viết mã bằng tay không làm giảm yêu cầu về cách diễn đạt. Nó còn làm yêu cầu ấy cao hơn. Trước đây, một ý tưởng mơ hồ có thời gian bộc lộ và trở nên rõ ràng hơn trong quá trình triển khai kéo dài. Giờ đây, tác nhân có thể nhanh chóng biến nó thành một hệ thống chạy được và có vẻ hoàn chỉnh. Sự mơ hồ không biến mất; nó chỉ bị chôn trong phần triển khai rồi xuất hiện về sau dưới dạng lỗi và tổn thất.

AI không miễn cho chúng ta khỏi việc suy nghĩ. Nó chỉ khiến ta khó che giấu những ý tưởng mơ hồ sau sự bận rộn của khâu triển khai.

## Nửa còn lại của “Giấy và Bút”

Vào năm 2025, Wang Jian đã so sánh AI với “giấy và bút mới” của nhân loại: không phải bản thân suy nghĩ mà là một phần mở rộng của suy nghĩ con người. [3] Tôi thích phép ẩn dụ này.

Nó chứa đựng một sự đối xứng lịch sử thú vị. Năm 1948, Alan Turing tưởng tượng một người được trang bị giấy, bút chì và tẩy, tuân theo một bộ quy tắc, hành vi của người này có thể được coi là hành vi của một cỗ máy vạn năng. [4] Sau đó, người ta sử dụng giấy và bút chì để giải thích cách một người có thể mô phỏng một chiếc máy. Gần tám mươi năm sau, hướng đi dường như đã đảo ngược. Chiếc máy đang trở thành loại giấy và bút mới, giúp con người bộc lộ những ý định trong những thế giới có thể chạy được.

Phép ẩn dụ cũng làm tôi nhớ đến trường đại học. Ngoài việc ngủ, có lẽ tôi đã dành một phần ba thời gian của mình để di chuyển qua lại giữa phần mềm và phần cứng: cài đặt hệ điều hành, cấu hình môi trường, công cụ học tập, mày mò bộ vi điều khiển, gỡ lỗi cho robot có bánh xe và khiến chúng phối hợp thành đội hình cũng như xây dựng bất kỳ bản demo nào mà tôi quan tâm. Tôi rất thích quá trình này, nhưng tôi thường dành nhiều thời gian hơn để chuẩn bị sáng tạo hơn là sáng tạo—giống như một họa sĩ mãi mãi tìm kiếm giấy, tạo bột màu và sửa bút vẽ.

Gọi AI là giấy và bút mới không có nghĩa là nó có thể làm được mọi thứ. Giấy không viết tiểu thuyết. Sắc tố không vẽ ra một bức tranh đẹp, và một chiếc máy ảnh không tạo ra một bộ phim hay. Các công cụ làm giảm chi phí biểu đạt nhưng chúng không quyết định được điều gì đáng biểu đạt.

Tác nhân mã hóa hoạt động tích cực hơn nhiều so với giấy và bút. Họ đưa ra các đề xuất, thực hiện nhiệm vụ và đưa ra các lựa chọn trong phạm vi giới hạn. Nhưng cho đến khi họ có thể chịu trách nhiệm về mục đích và hậu quả của tác phẩm thì việc tham gia nhiều hơn không tự động khiến họ trở thành tác giả.

Điều khiến tôi quan tâm là nửa còn lại của “giấy và bút mới”:

Nếu chúng ta có giấy và bút mới, chúng ta cần loại nghệ sĩ nào?

## Trung tâm sáng tạo phần mềm đang phát triển

Ý tưởng cho rằng lập trình viên là nghệ sĩ không phải là mới.

Năm 1974, Donald Knuth đã giải thích trong cuốn “Lập trình máy tính như một nghệ thuật” tại sao lập trình đòi hỏi kiến thức, kỹ năng và sự sáng tạo cũng như cách nó có thể tạo ra những đồ vật đẹp mắt. [5] Năm 2003, Paul Graham lập luận trong cuốn “Hackers and Painters” rằng tin tặc và họa sĩ đều là những nhà sản xuất. Đối với những người sáng tạo phần mềm, máy tính là phương tiện biểu đạt cũng giống như sơn dành cho họa sĩ hay bê tông dành cho kiến trúc sư. [6]

AI không phải thứ lần đầu biến lập trình viên thành nghệ sĩ. Nó đang thay đổi nơi nghệ thuật chủ yếu diễn ra.

Phần lớn nghệ thuật của một lập trình viên từng nằm trong mã: một thuật toán khéo léo, một phép trừu tượng thanh nhã, hay một hệ thống chứa đủ khả năng với ít cấu trúc nhất có thể. Vẻ đẹp này sẽ không biến mất chỉ vì các tác nhân đã xuất hiện.

Nhưng khi ngày càng nhiều công việc triển khai được giao cho các tác nhân, trung tâm sáng tạo của con người sẽ chuyển lên cao hơn. Nghệ thuật của phần mềm sẽ ngày càng được thể hiện trong toàn bộ tác phẩm: chọn vấn đề nào, thấu hiểu cuộc sống của ai, thiết lập trật tự nào, từ bỏ những khả năng nào, phản hồi người dùng ra sao và tác phẩm sẽ đi vào đời sống của họ như thế nào.

Sự sáng tạo ở cấp độ sản phẩm và kinh nghiệm luôn tồn tại. Sự thay đổi là khi việc triển khai không còn chiếm phần lớn sự chú ý của chúng ta nữa thì những mối quan tâm này có thể trở thành công việc chính của nhiều người sáng tạo phần mềm hơn.

Mã tao nhã vẫn quan trọng, nhưng mã chưa bao giờ là vẻ đẹp hoàn chỉnh của phần mềm. Phần mềm do con người và AI cùng nhau tạo ra không nên chỉ được coi là một đống mã chạy mà còn là một tác phẩm phần mềm hoàn chỉnh.

Đây là sự thay đổi được ngụ ý bởi “nghệ sĩ mới”.

Theo thuật ngữ chuyên môn hiện tại, vai trò này giống như sự kết hợp giữa người quản lý sản phẩm và kiến trúc sư: hỏi cả những gì nên làm và cho ai, cũng như cách hệ thống có thể tồn tại và ranh giới của nó nằm ở đâu. Nhưng những danh hiệu đó là chưa đủ. Tác giả của phần mềm cũng cần có khiếu thẩm mỹ, sự đồng cảm, khả năng đánh đổi và sẵn sàng chịu trách nhiệm về kết quả chung.

“Nghệ sĩ” ở đây không phải là một danh hiệu cao quý hơn, cũng không nhất thiết phải chỉ một người. Đó là vai trò của tác giả chịu trách nhiệm về một tác phẩm hoàn chỉnh và một nhóm có thể chia sẻ nó.

Kỹ thuật cho phép công việc tồn tại một cách đáng tin cậy. Nghệ thuật quyết định tại sao nó tồn tại và nó đi vào đời sống con người như thế nào.

## Kỹ thuật sẽ không biến mất và trách nhiệm không thể được thuê ngoài

Người nghệ sĩ mới không đề xuất ý tưởng hay rồi đợi AI làm xong mọi việc còn lại.

Ngay cả sau khi giấy và bút đã trở nên phổ biến, việc viết vẫn cần được đào tạo; sau khi máy ảnh trở nên phổ biến, nhiếp ảnh vẫn cần có sự phán xét. Tác nhân mã hóa làm giảm chi phí triển khai nhưng chúng không tự động giải quyết kiến trúc, bảo mật, hiệu suất, chất lượng hoặc bảo trì trong các hệ thống phức tạp.

Việc tôi không đọc mã không có nghĩa là tôi đã từ bỏ việc kiểm soát kỹ thuật. Các điểm kiểm soát đã thay đổi: từ kiểm tra từng dòng triển khai đến xác định mục tiêu hệ thống, nguyên tắc kiến trúc, ranh giới dữ liệu, mô hình cấp phép, tiêu chuẩn kiểm tra, khả năng quan sát và kết quả kiểm tra chấp nhận.

Điều đó không làm công việc bớt nghiêm ngặt; nó đặt sự nghiêm ngặt ở một nơi khác. Kiểm thử có bao quát những rủi ro thực tế không? Kết quả khi chạy có cho thấy hệ thống thỏa mãn các ràng buộc không? Lời giải thích của tác nhân có bằng chứng hỗ trợ không? Một tính năng chạy được đã thực sự sẵn sàng để phát hành chưa? AI có thể tham gia từng việc này, nhưng cuối cùng con người phải quyết định bằng chứng có đáng tin hay không và gánh chịu hậu quả nếu quyết định sai.

Một số lĩnh vực—bao gồm cơ sở hạ tầng, hệ thống quan trọng về an toàn và phần mềm cấp thấp—sẽ tiếp tục yêu cầu mọi người làm việc sâu bên trong mã. Họ có thể cần một số ít người thực sự hiểu các tầng thấp hơn hơn bao giờ hết. Lớp trừu tượng mới không bao giờ xóa các lớp bên dưới nó. Ngôn ngữ cấp cao không loại bỏ việc lắp ráp và điện toán đám mây không loại bỏ hệ điều hành. Lớp mới chỉ đơn giản là cho phép nhiều người sáng tạo hơn tránh phải duyệt qua mọi lớp thấp hơn mỗi khi họ tạo nội dung nào đó.

Quyết định không viết hoặc đọc mã của tôi là một thực tế có giới hạn, không phải là quy tắc cho tất cả mọi người. Giá trị của nó không phải là nó chứng tỏ mã đã lỗi thời. Nó giúp tôi biết được phần nào của công việc vẫn chưa thể được chuyển giao khi mã không còn là giao diện duy nhất để mọi người kiểm soát phần mềm.

Đầu tiên là sự phán xét. Thứ hai là trách nhiệm.

Những công cụ mạnh mẽ hơn cũng có thể tạo ra sự tầm thường ở quy mô lớn hơn. Khi việc triển khai trở nên rẻ hơn, trước tiên chúng ta có thể nhận được nhiều phần mềm thô sơ, lặp đi lặp lại, không đáp ứng được nhu cầu thực sự. Giấy và bút không tự động tạo ra văn học. Các tác nhân mã hóa sẽ không tự động tạo ra sự phục hưng của phần mềm.

AI không xóa bỏ sự khan hiếm. Nó chỉ chuyển sự khan hiếm sang chỗ khác.

Việc sản xuất phần mềm trước đây bị hạn chế chủ yếu bởi kỹ năng lập trình, nguồn lực kỹ thuật và thời gian triển khai. Khi những hạn chế đó giảm bớt, khả năng phán đoán về vấn đề nào là quan trọng, trực giác về sản phẩm, sự hiểu biết về hệ thống, sở thích, sự hiểu biết về con người và sự sẵn sàng chịu trách nhiệm về hậu quả trở nên tương đối khan hiếm.

Khi “làm như thế nào” trở nên rẻ hơn thì “làm cái gì” sẽ đắt hơn.

## Từ tác giả mã đến tác giả phần mềm

Bret Taylor đã trích dẫn một quan sát của Arya Asemanfar: AI có thể soạn thảo cho bạn, nhưng bạn vẫn là tác giả. [7] Addy Osmani đã mô tả vai trò mới của nhà phát triển là kiến trúc sư và tổng biên tập. [8]

Tác giả không nhất thiết phải thực hiện mọi hành động tạo nên tác phẩm. Kiến trúc sư không đặt từng viên gạch và đạo diễn không vận hành mọi máy quay trên phim trường. Nhưng họ phải biết công việc sẽ trở thành như thế nào, đánh giá liệu nó có thành công hay không và chịu trách nhiệm về toàn bộ công việc.

Sự thay đổi tương tự đang diễn ra trong phần mềm.

Chúng tôi thường xác định tác giả của phần mềm bằng cách hỏi ai đã viết mã. Trong tương lai, quyền tác giả có thể ngày càng phụ thuộc vào một loạt câu hỏi khác: Ai là người xác định vấn đề? Ai đã thiết lập những hạn chế? Ai đã thực hiện sự đánh đổi quan trọng? Ai quyết định rằng công việc đã hoàn thành? Và ai chịu trách nhiệm về những gì xảy ra sau khi nó xâm nhập vào thế giới?

Điều này cũng có thể thay đổi đơn vị kinh tế của phần mềm. Trước đây, nhu cầu thường phải được chia sẻ bởi đủ số người để có thể xây dựng phần mềm cho nhu cầu đó. Khi chi phí triển khai giảm đủ thấp, quy trình làm việc cụ thể của một nhóm, một gia đình hoặc thậm chí một người có thể đảm bảo phần mềm của riêng mình. Không phải ai cũng phải trở thành lập trình viên, nhưng sẽ có nhiều người hơn có thể trở thành tác giả của phần mềm.

AI đẩy công việc triển khai xuống dưới nhiều hơn trong khi di chuyển các điểm kiểm soát của con người và trung tâm sáng tạo lên một lớp trừu tượng. Các lập trình viên sẽ không còn đơn thuần là tác giả của mã nữa. Càng ngày họ càng trở thành tác giả của những tác phẩm phần mềm hoàn chỉnh - ý tôi là “những nghệ sĩ mới”.

Giấy và bút mới đã về. Nhưng một thời kỳ phục hưng mới sẽ không tự động diễn ra. Nó không phụ thuộc vào số lượng mã mà tác nhân có thể tạo ra mà phụ thuộc vào việc liệu chúng ta có khả năng phán đoán - và sẵn sàng chịu trách nhiệm - để trả lời một câu hỏi khó hơn “làm thế nào nó có thể được tạo ra?”

Điều gì đáng tạo ra và chúng ta muốn mọi người trải nghiệm nó như thế nào?

---

## Tài liệu tham khảo

[1] Andrej Karpathy, [Bài đăng trên X giới thiệu “vibe coding”](https://x.com/karpathy/status/1886192184808149383), 2025-02-02.

[2] Andrej Karpathy, [Bài đăng X đề xuất “kỹ thuật tác nhân”](https://x.com/karpathy/status/2019137879310836075), 2026-02-04.

[3] Liu Ningxin, [“Wang Jian: Sự đổi mới đến từ 'Sự không hoàn hảo' và 'Vượt qua ranh giới'"](https://www.21jingji.com/article/20250925/herald/63dd40dc7eeb8b21044db93b5a1ae23f.html), *21st Century Business Herald*, 2025-09-25.

[4] Alan M. Turing, [“Máy móc thông minh”](https://www.alanturing.net/turing_archive/archive/l/l32/L32-001.html), báo cáo của Phòng thí nghiệm Vật lý Quốc gia, 1948.

[5] Donald E. Knuth, [“Lập trình máy tính như một nghệ thuật”](https://doi.org/10.1145/361604.361612), *Truyền thông của ACM*, 17(12), 1974, trang 667–673.

[6] Paul Graham, [“Tin tặc và họa sĩ”](https://paulgraham.com/hp.html), tháng 5 năm 2003.

[7] Bret Taylor, [“AI là người chấp bút cho bạn, nhưng bạn mới là tác giả”](https://www.linkedin.com/posts/brettaylor_ai-is-your-ghostwriter-but-you-are-the-author-activity-7426807696881815552-Vwr9), LinkedIn, 2026-02-10.

[8] Addy Osmani, [*Beyond Vibe Coding*](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/), O'Reilly Media, tháng 8 năm 2025.
