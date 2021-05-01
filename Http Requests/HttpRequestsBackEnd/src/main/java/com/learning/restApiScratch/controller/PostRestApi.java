package com.learning.restApiScratch.controller;

import com.learning.restApiScratch.models.Posts;
import com.learning.restApiScratch.repo.PostsRepo;
import lombok.extern.slf4j.Slf4j;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ResponseBody
@Transactional
//@RequestMapping(value = "/posts", method = {RequestMethod.GET, RequestMethod.POST})
@RequestMapping(value = "/posts")
@Slf4j
public class PostRestApi {

    @Autowired
    public PostsRepo postsRepo;

    //    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/allresults")
    public List<Posts> posts() {
        log.info("Successfully imported the posts from MYSQL server");
        return postsRepo.findAll();
    }

    @DeleteMapping(value = "/destroyposts/{id}")
    public ResponseEntity<?> deletePost(@PathVariable(value = "id") String postId) {
        log.info("Deleted safely");
        Posts post = postsRepo.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post"));

        postsRepo.delete(post);

//        successful();

        return ResponseEntity.ok().build();
    }

    @PostMapping("/addpost")
    public Posts addPost(@RequestBody Posts post) {
        log.info("Added post to MYSQL database");
        return postsRepo.save(post);
    }

}
