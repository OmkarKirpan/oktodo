import unittest
import todo
class TestConfig(unittest.TestCase):
     
    ############################
    #### setup and teardown ####
    ############################

    def setUp(self):
        todo.app.testing = True
        self.app = todo.app.test_client()


    # executed after each test
    def tearDown(self):
        pass
###############
#### tests ####
###############

    def test_home_status_code(self):
        """Assert that user successfully lands on homepage"""
        result = self.app.get('/')
        self.assertEqual(result.status_code, 200)

if __name__ == "__main__":
    unittest.main()