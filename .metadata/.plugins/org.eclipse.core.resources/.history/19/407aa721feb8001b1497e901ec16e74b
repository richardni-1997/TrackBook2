//package TrackBook.TrackBookAPI.Controllers;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import TrackBook.TrackBookAPI.Models.Goal;
//import TrackBook.TrackBookAPI.Models.PaymentInfo;
//import TrackBook.TrackBookAPI.Repositories.PaymentInfoRepository;
//
//@CrossOrigin(origins = "http://localhost:4200")
//@RestController
//@RequestMapping("/api")
//public class PaymentController {
//	
//	@Autowired
//	PaymentInfoRepository paymentInfoRepository;
//	
//	//Get all paymentInfo entries of all Users
//	@GetMapping("/paymentInfo")
//	public ResponseEntity<List<PaymentInfo>> getAllPaymentInfo(){
//		try {
//			List<PaymentInfo> paymentInfo = new ArrayList<PaymentInfo>();
//			paymentInfoRepository.findAll().forEach(paymentInfo::add);
//			
//			if(paymentInfo.isEmpty()) {
//				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//			}
//			
//			return new ResponseEntity<>(paymentInfo, HttpStatus.OK);
//		}
//		catch (Exception exception) {
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
//	
//	//Creates new Payment Info 
//	@PostMapping("/paymentInfo")
//	public ResponseEntity<PaymentInfo> createPaymentInfo(@RequestBody PaymentInfo paymentInfo){
//		try {
//			PaymentInfo _paymentInfo = paymentInfoRepository.save(
//					new PaymentInfo(paymentInfo.getEmail(), paymentInfo.getGoalName(), 
//							paymentInfo.getDepositAmount(), paymentInfo.getDepositSchedule()));
//			
//			return new ResponseEntity<>(_paymentInfo, HttpStatus.CREATED);
//		}
//		catch (Exception exception) {
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
//	
//	//Updates paymentinfo for an email
////	@PutMapping("/paymentInfo/{email}")
////	public ResponseEntity<PaymentInfo> updatePaymentInfo(@PathVariable("email") String email, @RequestBody PaymentInfo paymentInfo){
////		
////		Optional<PaymentInfo> paymentInfoData = paymentInfoRepository.findByEmail(email);
////		
////		if(paymentInfoData.isPresent()) {
////			PaymentInfo _paymentInfo = paymentInfoData.get();
////			_paymentInfo.setDepositAmount(paymentInfo.getDepositAmount());
////			_paymentInfo.setDepositSchedule(paymentInfo.getDepositSchedule());
////			_paymentInfo.setEmail(paymentInfo.getEmail());
////			_paymentInfo.setGoalName(paymentInfo.getGoalName());
////			
////			return new ResponseEntity<>(paymentInfoRepository.save(_paymentInfo), HttpStatus.OK);
////		}
////		else {
////			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////		}
////	}
//	
//	//Gets a paymentinfo for specific paymentinfoId
//	@GetMapping("/paymentInfo/{paymentId}")
//	public ResponseEntity<PaymentInfo> getPaymentInfoById(@PathVariable("paymentId") long paymentId){
//		Optional<PaymentInfo> paymentData = paymentInfoRepository.findByPaymentId(paymentId);
//		
//		if(paymentData.isPresent()) {
//			return new ResponseEntity<>(paymentData.get(), HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
//	
//	//Updates a paymentInfo for specific paymentInfoId
//	@PutMapping("/paymentInfo/{paymentId}")
//	public ResponseEntity<PaymentInfo> updatePaymentInfo(@PathVariable("paymentId") long paymentId, @RequestBody PaymentInfo paymentInfo){
//		Optional<PaymentInfo> paymentData = paymentInfoRepository.findByPaymentId(paymentId);
//		
//		if (paymentData.isPresent()) {
//			PaymentInfo _paymentInfo = paymentData.get();
//			_paymentInfo.setDepositAmount(paymentInfo.getDepositAmount());
//			_paymentInfo.setDepositSchedule(paymentInfo.getDepositSchedule());
//			_paymentInfo.setEmail(paymentInfo.getEmail());
//			_paymentInfo.setGoalName(paymentInfo.getGoalName());
//			
//			return new ResponseEntity<>(paymentInfoRepository.save(_paymentInfo), HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
//	
//}
