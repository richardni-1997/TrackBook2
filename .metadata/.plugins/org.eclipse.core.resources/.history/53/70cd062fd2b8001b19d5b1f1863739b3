package TrackBook.TrackBookAPI.Controllers;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import TrackBook.TrackBookAPI.Models.Goal;
import TrackBook.TrackBookAPI.Repositories.GoalRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class GoalController {
	@Autowired
	GoalRepository goalRepository;
	
	//get all goals
		 @GetMapping("/goals")
		 public List<Goal> getAllGoals(){
			 return goalRepository.findAll();
		 }
	
	
	//get goals by goalId
	@GetMapping("/goals/{goalId}")
	public ResponseEntity<Goal> getGoalByGoalId(@PathVariable("goalId") long goalId)
	{
		Optional<Goal> goalData = goalRepository.findByGoalId(goalId);

	    if (goalData.isPresent()) 
	    {
	      return new ResponseEntity<>(goalData.get(), HttpStatus.OK);
	    } 
	    else 
	    {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	
	// add new goals
	@PostMapping("/goals")
	public ResponseEntity<Goal> createGoal(@RequestBody Goal goal) 
	{
	    try 
	    {
	    	Goal _goal =  goalRepository.save(new Goal (goal.getEmail(),goal.getName(),goal.getDescription(),goal.getStartDate(),goal.getTargetDate(),
	    			goal.getCurrentSavings(),goal.getTargetSavings(),goal.getPriority()));
	      
	      return new ResponseEntity<>(_goal, HttpStatus.CREATED);
	    } 
	    catch (Exception e) 
	    {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	
//update goal
	@PutMapping("/goals/{goalId}")
	
	public ResponseEntity<Goal> updateGoalId(@PathVariable("goalId") int goalId, @RequestBody Goal goal)
	
	{
	    Optional<Goal> goalData = goalRepository.findByGoalId(goalId);
		

	    if (goalData.isPresent()) 
	    {
	    	Goal _goal = goalData.get();
	    	_goal.setEmail(goal.getEmail());
	    	_goal.setName(goal.getName());
	    	_goal.setDescription(goal.getDescription());
	    	_goal.setStartDate(goal.getStartDate());
	    	_goal.setTargetDate(goal.getTargetDate());
	    	_goal.setCurrentSavings(goal.getCurrentSavings());
	    	_goal.setTargetSavings(goal.getTargetSavings());
	    	_goal.setPriority(goal.getPriority());
	      
	    	return new ResponseEntity<>(goalRepository.save(_goal), HttpStatus.OK);
	    } 
	    else 
	    {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	 }
	@GetMapping("/deleteGoal/{goalId}")
    public String deleteGoal(@PathVariable(value = "goalId") long goalId) {

        
        this.goalRepository.deleteBygoalId(goalId);
        return "redirect:/";
    }
	// update goal
//	@PutMapping("/goals/{email}")
//	
//	public ResponseEntity<Goal> updateGoal(@PathVariable("email") String email, @RequestBody Goal goal)
//	
//	{
//	    List<Goal> goalData = goalRepository.findByEmail(email);
//		
//
//	    if (goalData.isEmpty()) 
//	    {
//	    	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//	    } 
//	    else 
//	    {
//	      
//	      Goal _goal = goalData.get();
//	    	_goal.setEmail(goal.getEmail());
//	    	_goal.setName(goal.getName());
//	    	_goal.setDescription(goal.getDescription());
//	    	_goal.setStartDate(goal.getStartDate());
//	    	_goal.setTargetDate(goal.getTargetDate());
//	    	_goal.setCurrentSavings(goal.getCurrentSavings());
//	    	_goal.setTargetSavings(goal.getTargetSavings());
//	    	_goal.setPriority(goal.getPriority());
//	      
//	    	return new ResponseEntity<>(goalRepository.save(_goal), HttpStatus.OK);
//	    }
//	 }
//
//	
	 // get goal by email
//@GetMapping("/goals/{email}")
//public ResponseEntity<Goal> getGoalByEmail(@PathVariable("email") String email)
//{
//	List<Goal> goalData = goalRepository.findByEmail(email);
//
//   if (goalData.isEmpty()) 
//   	
//   {
//   	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//   	
//   } 
//   else 
//   {
//   	return new ResponseEntity<>(goalData.get(), HttpStatus.OK);
//   }
//}


	
}
